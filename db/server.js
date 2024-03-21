const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.json());

const TEXTILE_FILE_PATH = './like-count.textile';

// Endpoint to get the like count
app.get('/api/like-count', async (req, res) => {
    try {
        const data = await fs.readFile(TEXTILE_FILE_PATH, 'utf8');
        // Parse the textile content and extract the like count
        // Respond with the like count
        res.json({ likeCount: likeCount }); // Replace likeCount with actual count
    } catch (err) {
        console.error('Error reading file:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to increment the like count
app.post('/api/like', async (req, res) => {
    try {
        // Read the current like count from the file
        const data = await fs.readFile(TEXTILE_FILE_PATH, 'utf8');
        // Parse the textile content and increment the like count
        // Write the updated like count back to the file
        res.json({ message: 'Like successful' });
    } catch (err) {
        console.error('Error updating like count:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to decrement the like count
app.post('/api/unlike', async (req, res) => {
    try {
        // Read the current like count from the file
        const data = await fs.readFile(TEXTILE_FILE_PATH, 'utf8');
        // Parse the textile content and decrement the like count
        // Write the updated like count back to the file
        res.json({ message: 'Unlike successful' });
    } catch (err) {
        console.error('Error updating like count:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
