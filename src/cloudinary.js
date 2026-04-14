const cloudinary = require('cloudinary').v2;

// Cloudinary config is automatically loaded from CLOUDINARY_URL env var
// OR manually configured if strictly needed, but internal logic prefers CLOUDINARY_URL

/**
 * Upload an image URL or buffer to Cloudinary
 * @param {string} imageUrl - The URL of the image to upload
 * @returns {Promise<string|null>} - The Cloudinary Secure URL or null if failed
 */
async function uploadToCloudinary(imageUrl) {
    if (!process.env.CLOUDINARY_URL) {
        console.warn('[CLOUDINARY] No CLOUDINARY_URL found. Skipping upload.');
        return null;
    }

    try {
        // Cloudinary can fetch directly from URLs, handling the buffer logic for us!
        const result = await cloudinary.uploader.upload(imageUrl, {
            folder: 'dnd_inventory',
            resource_type: 'image'
        });

        if (result && result.secure_url) {
            console.log(`[CLOUDINARY] Upload success: ${result.secure_url}`);
            return result.secure_url;
        } else {
            console.error('[CLOUDINARY] Upload failed (no url):', result);
            return null;
        }
    } catch (error) {
        console.error('[CLOUDINARY] Error uploading:', error.message);
        return null;
    }
}

/**
 * Generate a download archive URL for all images in the dnd_inventory folder
 * @returns {string|null} - The download URL or null if failed
 */
function getDownloadArchiveUrl() {
    if (!process.env.CLOUDINARY_URL) {
        console.warn('[CLOUDINARY] No CLOUDINARY_URL found. Cannot generate archive.');
        return null;
    }

    try {
        // Generates a signed URL to download a ZIP of the folder
        const url = cloudinary.utils.download_folder('dnd_inventory', {
            resource_type: 'image'
        });
        return url;
    } catch (error) {
        console.error('[CLOUDINARY] Error generating download archive URL:', error.message);
        return null;
    }
}

module.exports = { uploadToCloudinary, getDownloadArchiveUrl };
