# Student Badge Tracker

A simple app to track digital badges students can earn (e.g., "JavaScript Beginner", "GitHub Pro", "Code Reviewer").

Backend: REST API (Node.js + Express or TypeScript + Fastify)

Frontend: React (Vite + TypeScript)

Data storage: In-memory (array or simple JSON file)

Testing: Basic unit tests (Jest)

CI/CD: GitHub Actions (lint → test → build)

Deployment: Just run locally (npm start), no cloud deploy needed


## Tasks
1. Add a new badge through the frontend - Let them modify the form and POST to the API
1. Style the badge list - Use Tailwind or plain CSS
1. Write a new test for the backend, Eg. test that badge creation works
1. Fix a broken test - Intentionally break one and let them figure it out with AI help


Bonus ideas:

Add a filter/search bar

Add a date field to badges

Add a frontend-only feature like "sort badges by name"

## Pre-reqs (installed beforehand):

Node.js v22

GitHub account

Code editor (VS Code)

Git (CLI or GUI)

Project template cloned and ready

# Backend
cd api
npm install
npm run dev

# Frontend
cd app
npm install
npm run dev

