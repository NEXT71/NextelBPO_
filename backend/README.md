# NextelBPO Backend

## Overview
This is the backend API for NextelBPO, built with Node.js and Express. It handles contact forms, career submissions, and email notifications.

## Deployment Checklist
- Node.js v18+ and npm installed
- All environment variables set in `.env`
- Install dependencies: `npm install`
- Start server: `npm start` (ensure a `start` script is present in `package.json`)
- Secure `.env` and never commit secrets
- Use HTTPS and a reverse proxy (e.g., Nginx) in production
- Set up logging and monitoring

## Essential Files
- `server.js` — Entry point
- `app.js` — Express app setup
- `config/` — Email and rate limiter configs
- `controllers/` — Business logic
- `routes/` — API endpoints
- `services/` — Email service
- `middleware/` — Error handling

## Environment Variables
See `.env` for required variables:
- `PORT`
- `EMAIL_SERVICE`, `EMAIL_USER`, `EMAIL_PASS`, `CONTACT_EMAIL`

## Deployment Example
```bash
npm install
npm run build # if you have a build step
npm start
```

## Missing Files
- Add a `Dockerfile` for containerized deployment (see below)
- Add a `.gitignore` to exclude node_modules and secrets

## Example Dockerfile
```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

## Example .gitignore
```
node_modules/
.env
```

## Security
- Never commit `.env` to source control
- Use rate limiting and proper error handling
- Keep dependencies updated

## Contact
For issues, contact the NextelBPO team.
