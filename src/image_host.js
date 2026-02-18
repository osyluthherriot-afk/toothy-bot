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
        const formData = new FormData();
        formData.append('image', imageUrl);

        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData, {
            headers: formData.getHeaders()
        });

        if (response.data && response.data.success) {
            console.log(`[IMG_HOST] Upload success: ${response.data.data.url}`);
            return response.data.data.url;
        } else {
            console.error('[IMG_HOST] Upload failed:', response.data);
            return null;
        }
    } catch (error) {
        console.error('[IMG_HOST] Error uploading:', error.response?.data || error.message);
        return null;
    }
}

module.exports = { uploadToImageHost };
