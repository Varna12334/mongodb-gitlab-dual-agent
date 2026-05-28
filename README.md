# MongoDB & GitLab Dual-Agent Assistant

An automated, intelligent multi-agent workflow that bridges database performance monitoring with real-time operational incident tracking. Built for the Google Cloud Rapid Agent Hackathon 2026.

## 🚀 Overview

The **MongoDB & GitLab Dual-Agent Assistant** is engineered to eliminate manual human intervention when database anomalies occur. Operating as a coordinated dual-agent system, it continuously monitors your data layer and instantly escalates critical data sync errors or server status anomalies into structured tracking pipelines.

- **Agent 1 (The Monitor):** Continuously watches a MongoDB instance for data synchronization drops, replication delays, or operational exceptions.
- **Agent 2 (The Operator):** Interacts directly with the GitLab API via a Model Context Protocol (MCP) server workflow to instantly spin up an isolated, structured **Incident Issue** containing diagnostic logs.

## 🛠️ Built With

- **Google Cloud Agent Builder:** Used to model, orchestrate, and coordinate the multi-step dual-agent system workflow.
- **Gemini 3:** Powers the core reasoning, planning, and contextual understanding of log data.
- **MongoDB:** Provides the primary operational database and mock cluster logging target.
- **GitLab API:** Leveraged via secure personal access tokens to dynamically instantiate incident entities.
- **Node.js & Express:** Forms the lightweight runtime engine running the dual-agent's backend integration hooks.

## 📋 Project Structure

```text
├── .gitignore            # Tells Git to ignore private credential files (.env)
├── LICENSE               # MIT Open Source License
├── README.md             # Project documentation
├── gitlabService.js      # Core GitLab API integration layer
└── server.js             # Express application server and webhook endpoints
