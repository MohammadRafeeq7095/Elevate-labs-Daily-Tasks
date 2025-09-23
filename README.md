# 🚀 NodeJS Demo App

A simple Node.js app, Dockerized with CI/CD via GitHub Actions. Builds and pushes the Docker image to Docker Hub automatically on push to `main`.

---

## 🏗️ Project Structure

.github/workflows/main.yml
nodejs-demo-app/
├─ Dockerfile
├─ index.js
├─ package.json
README.md
---

## ⚡ Features

- Dockerized Node.js app  
- CI/CD pipeline with GitHub Actions  
- Automatic Docker Hub image build & push  

---

## 🛠️ Prerequisites

- Docker installed  
- Node.js installed  
- GitHub secrets: `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`  

---

## 💻 Run Locally

```bash
git clone <repo-url>
cd nodejs-demo-app
npm install
node index.js
Visit: http://localhost:8080/

🐳 Docker

docker build -t <dockerhub-username>/nodejs-demo-app:latest ./nodejs-demo-app
docker run -p 8080:8080 <dockerhub-username>/nodejs-demo-app:latest
⚙️ CI/CD
Triggered on push to main

Sets up Node.js and installs dependencies

Builds Docker image from nodejs-demo-app/Dockerfile

Logs in to Docker Hub using GitHub secrets

Pushes image to Docker Hub

👨‍💻 Author
Mohammad Rafeeq Angadi

GitHub
LinkedIn

---

✅ This is **one page**, **easy to copy**, and fully formatted in Markdown.  

If you want, I can also make a **version with badges** that fits in one page without being complicated. Do you want me to do that?
