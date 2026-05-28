import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export async function createGitLabIncident(title, description) {
    const token = process.env.GITLAB_PERSONAL_ACCESS_TOKEN;
    const projectId = process.env.GITLAB_PROJECT_ID;

    if (!token || !projectId) {
        throw new Error("Missing GitLab configuration in environment variables.");
    }

    // Target the specific GitLab issues endpoint for your project
    const url = `https://gitlab.com/api/v4/projects/${projectId}/issues`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'PRIVATE-TOKEN': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
            issue_type: 'incident' // Classifies it as an operational incident
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`GitLab API responded with status: ${response.status} - ${errorText}`);
    }

    return await response.json();
}
