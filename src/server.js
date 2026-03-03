const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Lightweight Health Check for UptimeRobot
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// API: Get Party Info (XP)
app.get('/api/party', async (req, res) => {
    res.json(await db.getParty());
});

// API: Get User Inventory (Updated to include User details like Slots/Gold)
app.get('/api/inventory/:userId', async (req, res) => {
    const userId = req.params.userId;
    const items = await db.getInventory(userId);
    const user = await db.getUser(userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Transform MongoDB _id to id for frontend
    const transformedItems = items.map(item => ({
        ...item.toObject(),
        id: item._id.toString()
    }));

    // Also transform user _id to id
    const transformedUser = {
        ...user.toObject(),
        id: user._id.toString()
    };

    res.json({ user: transformedUser, items: transformedItems });
});

// API: Update User Details (Gold, Slots)
app.post('/api/user/:userId', async (req, res) => {
    const userId = req.params.userId;
    const updates = req.body; // { gold, soulCoins, slots }

    const updatedUser = await db.updateUser(userId, updates);
    if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
});

// API: Get All Users
app.get('/api/users', async (req, res) => {
    const users = await db.listUsers();
    res.json(users);
});

// API: Delete User
app.delete('/api/users/:userId', async (req, res) => {
    const userId = req.params.userId;
    const deleted = await db.deleteUser(userId);
    res.json({ success: deleted });
});

// API: Update Item
app.post('/api/items/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    const updates = req.body;

    const updated = await db.updateItem(itemId, updates);
    if (!updated) {
        return res.status(404).json({ error: 'Item not found' });
    }

    res.json(updated);
});

// API: Delete Item
app.delete('/api/items/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    const deleted = await db.deleteItem(itemId);

    if (!deleted) {
        return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ success: true });
});

// Proxy for 5e.tools to strip navigation
app.get('/api/proxy/5etools', async (req, res) => {
    try {
        const response = await axios.get('https://5e.tools/classes.html', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        let html = response.data;

        // Inject <base> tag to fix relative links (images, scripts, styles)
        html = html.replace('<head>', '<head><base href="https://5e.tools/">');

        // Inject CSS to hide the navigation bar and header
        const styleInjection = `
            <style>
                #navigation, .page__nav, header, .flex-v-center.no-shrink.page__header, .ve-flex-col.no-shrink.opt-height.page__header { 
                    display: none !important; 
                }
                body { 
                    padding-top: 0 !important; 
                }
            </style>
        `;
        html = html.replace('</head>', `${styleInjection}</head>`);

        res.send(html);
    } catch (error) {
        console.error('Proxy Error:', error.message);
        res.status(500).send('Error proxying 5e.tools');
    }
});

function startServer() {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = { startServer };
