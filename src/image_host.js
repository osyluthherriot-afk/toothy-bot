const axios = require('axios');
const FormData = require('form-data');

/**
 * Upload an image URL to ImgBB
 * @param {string} imageUrl - The URL of the image to upload
 * @returns {Promise<string|null>} - The ImgBB URL or null if failed/disabled
 */
async function uploadToImageHost(imageUrl) {
    const apiKey = process.env.IMG_HOST_API_KEY;
    if (!apiKey) {
        console.warn('[IMG_HOST] No API Key found. Skipping upload.');
        return null; // Fallback to original URL
    }

    try {
        // 1. Download image buffer from Discord
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data); // No 'binary' encoding needed for arraybuffer

        // 2. Prepare FormData
        const formData = new FormData();

        // Extract filename and determine content type
        let filename = imageUrl.split('/').pop().split('?')[0] || 'image.png';
        if (!filename.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
            filename += '.png'; // Default extension if missing
        }

        // Append with explicit options
        formData.append('image', buffer, {
            filename: filename,
            contentType: imageResponse.headers['content-type'] || 'image/png'
        });

        // 3. Upload to ImgBB
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData, {
            headers: formData.getHeaders(),
            timeout: 30000 // 30 second timeout
        });

        if (response.data && response.data.success) {
            console.log(`[IMG_HOST] Upload success: ${response.data.data.url}`);
            return response.data.data.url;
        } else {
            console.error('[IMG_HOST] Upload failed:', response.data);
            return null;
        }
    } catch (error) {
        console.error('[IMG_HOST] Error uploading:', error.message);
        return null;
    }
}

module.exports = { uploadToImageHost };
