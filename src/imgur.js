const axios = require('axios');

/**
 * Upload an image URL to Imgur
 * @param {string} imageUrl - The URL of the image to upload
 * @returns {Promise<string|null>} - The Imgur URL or null if failed/disabled
 */
async function uploadToImgur(imageUrl) {
    const clientId = process.env.IMGUR_CLIENT_ID;
    if (!clientId) {
        console.warn('[IMGUR] No Client ID found. Skipping upload.');
        return null; // Fallback to original URL
    }

    try {
        const response = await axios.post('https://api.imgur.com/3/image', {
            image: imageUrl,
            type: 'url'
        }, {
            headers: {
                Authorization: `Client-ID ${clientId}`
            }
        });

        if (response.data && response.data.success) {
            console.log(`[IMGUR] Upload success: ${response.data.data.link}`);
            return response.data.data.link;
        } else {
            console.error('[IMGUR] Upload failed:', response.data);
            return null;
        }
    } catch (error) {
        console.error('[IMGUR] Error uploading:', error.response?.data || error.message);
        return null;
    }
}

module.exports = { uploadToImgur };
