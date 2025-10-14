# FYP Project Setup Guide


This guide explains how to run the project using Docker (recommended for all users) and how to set up local development environments for both backend and frontend if you want to work outside Docker.
Instructions are provided for both macOS and Windows users.

---



## 🚀 Running with Docker (Recommended)

### Services Overview
- **frontend**: Next.js app (port 3000)
- **backend**: FastAPI app (port 8000)
- **nginx**: Reverse proxy (port 80) for unified access and routing

### 1. Prerequisites
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for your OS (Mac/Windows/Linux).
- Make sure Docker is running.


### 2. Build and Start the Project
Open a terminal in the project root and run:

#### macOS/Linux/Windows (PowerShell or CMD):
```sh
docker compose -f docker-compose.yml up -d --build
```

- This will build and start all services: backend (FastAPI), frontend (Next.js), and nginx (reverse proxy) in detached mode.
+- **Access the app via nginx at [http://localhost](http://localhost) (port 80).**
+- You no longer need to use ports 3000 or 8000—just use `localhost` in your browser.
+- nginx will route requests automatically:
+  - `/api/` → backend (FastAPI)
+  - all other paths → frontend (Next.js)


### 3. Stopping the Project
To stop all containers, run:
```sh
docker compose down
```


### 4. Useful Docker Commands

- **View logs for a specific service (including nginx):**
   ```sh
   docker compose logs <service-name>
   # Example: docker compose logs nginx
   ```
- **Restart a service after code or dependency changes:**
   ```sh
   docker compose restart <service-name>
   # Example: docker compose restart nginx
   ```
- **Rebuild a service (after changing Dockerfile or dependencies):**
   ```sh
   docker compose -f docker-compose.yml up -d --build <service-name>
   # Example: docker compose -f docker-compose.yml up -d --build nginx
   ```
- **Open a shell inside a running container:**
   ```sh
   docker exec -it <container-name> /bin/sh
   # Example: docker exec -it nginx-proxy /bin/sh
   ```

---


## 🛠️ Local Development (Sync with Docker)


If you want to use your local environment for development (for live reload, linting, or editor features):

### Backend (Python/FastAPI)
#### macOS/Linux:
1. **Create a virtual environment:**
   ```sh
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   ```
2. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
3. **Run the backend locally:**
   ```sh
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

#### Windows (CMD or PowerShell):
1. **Create a virtual environment:**
   ```bat
   cd backend
   python -m venv venv
   venv\Scripts\activate
   ```
2. **Install dependencies:**
   ```bat
   pip install -r requirements.txt
   ```
3. **Run the backend locally:**
   ```bat
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend (Next.js)
1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```
2. **Run the frontend locally:**
   ```sh
   npm run dev
   ```
3. **Access the app:**
   - Open [http://localhost:3000](http://localhost:3000) or [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost](http://localhost) or [http://0.0.0.0](http://0.0.0.0) in your browser.

---



- Any code changes you make are reflected in both Docker and your local environment (since you edit the same files).
- For best editor support (linting, autocomplete), always install dependencies locally as shown above.
- Use Docker for deployment or to avoid local setup issues.
- You only need to use `localhost` or `0.0.0.0` (port 80) in your browser—no more 3000 or 8000!
- All API requests should use `/api` (e.g., `http://localhost/api/...` or `http://0.0.0.0/api/...`).

---



## 📝 Troubleshooting
- If you see errors about missing files or dependencies, make sure you have run the install commands above.
- If Docker containers fail to start, check logs for a specific service (including nginx):
   ```sh
   docker compose logs <service-name>
   # Example: docker compose logs nginx
   ```
- To open a shell in a running container for debugging:
   ```sh
   docker exec -it <container-name> /bin/sh
   # Example: docker exec -it nginx-proxy /bin/sh
   ```
- For any issues, delete `node_modules` or recreate your Python `venv` and reinstall dependencies.
- Rebuild with `--build` if you change Dockerfiles or dependencies.
- Use `docker compose restart <service-name>` to restart a service after code or dependency changes.
- If nginx fails to start, check that your config file exists and is mounted correctly.

---

Happy coding!
