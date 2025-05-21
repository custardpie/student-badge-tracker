Backend API
# Node.js + Express API

## Endpoints
* GET /badges – list all badges
* POST /badges – create a new badge
* GET /badges/:id – view a single badge
* DELETE /badges/:id – delete a badge

## Badge Object
```
{
  "id": "abc123",
  "title": "Git Beginner",
  "description": "Completed a Git tutorial",
  "awardedTo": "Alice"
}
```


api/index.ts – Main Express app setup

api/badges.ts – Routes and logic

api/tests/badges.test.ts – Jest unit tests

api/package.json and tsconfig.json