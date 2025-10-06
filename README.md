# FYP Project Setup Guide


This guide explains how to run the project using Docker (recommended for all users) and how to set up local development environments for both backend and frontend if you want to work outside Docker.
Instructions are provided for both macOS and Windows users.

---


## 🚀 Running with Docker (Recommended)

### 1. Prerequisites
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for your OS (Mac/Windows/Linux).
- Make sure Docker is running.

### 2. Build and Start the Project
Open a terminal in the project root and run:

#### macOS/Linux/Windows (PowerShell or CMD):
```sh
docker compose -f docker-compose.yml up -d --build
```

- This will build and start both the backend (FastAPI) and frontend (Next.js) services in detached mode.
- The frontend will be available at [http://localhost:3000](http://localhost:3000) and [http://0.0.0.0:3000](http://0.0.0.0:3000)
- The backend API will be available at [http://localhost:8000](http://localhost:8000) and [http://0.0.0.0:8000](http://0.0.0.0:8000)

### 3. Stopping the Project
To stop the containers, run:
```sh
docker compose down
```

### 4. Useful Docker Commands

- **View logs for a specific service:**
   ```sh
   docker compose logs <service-name>
   # Example: docker compose logs backend
   ```
- **Restart a service after code or dependency changes:**
   ```sh
   docker compose restart <service-name>
   # Example: docker compose restart frontend
   ```
- **Rebuild a service (after changing Dockerfile or dependencies):**
   ```sh
   docker compose -f docker-compose.yml up -d --build <service-name>
   # Example: docker compose -f docker-compose.yml up -d --build backend
   ```
- **Open a shell inside a running container:**
   ```sh
   docker exec -it <container-name> /bin/sh
   # Example: docker exec -it fyp-backend-1 /bin/sh
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
   - Open [http://localhost:3000](http://localhost:3000) or [http://0.0.0.0:3000](http://0.0.0.0:3000) in your browser.

---


## 🔄 Keeping Docker and Local in Sync
- Any code changes you make are reflected in both Docker and your local environment (since you edit the same files).
- For best editor support (linting, autocomplete), always install dependencies locally as shown above.
- Use Docker for deployment or to avoid local setup issues.
- You can access the frontend and backend at both `localhost` and `0.0.0.0` addresses as shown above.

---


## 📝 Troubleshooting
- If you see errors about missing files or dependencies, make sure you have run the install commands above.
- If Docker containers fail to start, check logs for a specific service:
   ```sh
   docker compose logs <service-name>
   # Example: docker compose logs backend
   ```
- To open a shell in a running container for debugging:
   ```sh
   docker exec -it <container-name> /bin/sh
   # Example: docker exec -it fyp-backend-1 /bin/sh
   ```
- For any issues, delete `node_modules` or recreate your Python `venv` and reinstall dependencies.
- Rebuild with `--build` if you change Dockerfiles or dependencies.
- Use `docker compose restart <service-name>` to restart a service after code or dependency changes.

---

Happy coding!
