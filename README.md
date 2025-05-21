# Student Badge Tracker

A simple app to track digital badges students can earn (e.g., "JavaScript Beginner", "GitHub Pro", "Code Reviewer").

* Backend: REST API (Node.js + Express or TypeScript + Fastify)
* Frontend: React (Vite + TypeScript)
* Data storage: In-memory (array or simple JSON file)
* Testing: Basic unit tests (Jest)
* CI/CD: GitHub Actions (lint → test → build)
* Deployment: Just run locally (npm start), no cloud deploy needed


## Tasks
* Install software on your laptop
    - Git source control
        + Windows https://gitforwindows.org/
        + Mac Install homebrew and then brew install git
    - VS Code (Code editor) https://code.visualstudio.com/
    - Node.js v22 https://nodejs.org/en/download
* Get your code from https://github.com/custardpie/student-badge-tracker
    - Git clone
    - Run the backend and frontend on your laptop. See the next section on how to run it
    - Play with the app on the browser
* Pick a ticket to work on. I don't expect you to complete it.
    - https://custardpie.atlassian.net/jira/software/projects/SCRUM/boards/1
    - Create a feature branch for your work
    - Have a look at the code
    - Ask ChatGPT
* When you are ready, push your work up to the repos and create a
pull request
* Review each others work

## How to run
Open the code in VS Code. Open a terminal and then run the following commands
### Backend
```
cd api
npm install
npm run dev
```

### Frontend
```
cd app
npm install
npm run dev
```

