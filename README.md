# Full‑stack Employees App (React + Vite + Express + Sequelize)

A simple monorepo with a React frontend and an Express + Sequelize (MySQL) backend.

## Structure

```
/
├─ frontend/   # React + Vite app
└─ backend/    # Express API + Sequelize (MySQL)
```

## Prerequisites
- Node.js 18+
- A MySQL instance and credentials

## Getting started

### Backend
```
cd backend
npm install
# Start your API (adjust to your script):
node server.js
# API runs at http://localhost:4000 by default (adjust if your server uses a different port)
```

### Frontend
```
cd frontend
npm install
npm run dev
# App runs at http://localhost:5173 by default
```

## Environment variables (recommended)
Move secrets out of source code and into environment variables. Typical options:

- Single DATABASE_URL
  - Example: `mysql://USER:PASS@HOST:3306/DBNAME`
- Or discrete variables
  - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`

Frontend typically needs an API base URL:
- `VITE_API_URL` (e.g. `http://localhost:4000` in development)

Consider adding `.env.example` files in each app to document required variables.

## API endpoints (backend)
- `GET /employees` — list all employees
- `POST /employees` — create employee
- You can extend with update/delete as needed

## Deployment

- Frontend (Azure Static Web Apps)
  - app_location: `/frontend`
  - output_location: `dist` (Vite default)
  - Set `VITE_API_URL` to your backend’s public URL in Azure SWA configuration

- Backend (Azure App Service, Container Apps, VM, or similar)
  - Provide MySQL credentials via environment variables
  - Open the chosen port (e.g., 4000) and ensure CORS allows the frontend origin

## Development notes
- Sequelize defaults primary key to `id`. If your table uses another key (e.g., `employee_id`), define it in the model:
  ```js
  employee_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
  ```
- Vite dev server proxies can be used if you prefer to avoid CORS in local dev.

## Scripts (common)
- Frontend: `npm run dev`, `npm run build`, `npm run preview`
- Backend: use your chosen start script (e.g., `node server.js` or `npm run dev` if you add nodemon)

## License
Choose a license if you plan to open source.
