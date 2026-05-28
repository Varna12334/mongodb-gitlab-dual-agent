import express from 'express';
import dotenv from 'dotenv';
import { createGitLabIncident } from './gitlabService.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Test endpoint to trigger a GitLab incident from your dual-agent
app.post('/api/alert', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }

    try {
        const result = await createGitLabIncident(title, description);
        res.status(200).json({ success: true, issue: result });
    } catch (error) {
        res.status(500).json({ error: "Failed to communicate with GitLab API", details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Dual-Agent Server running on port ${PORT}`);
});
