FROM node:20 AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
```

### Fixes made:

1. **`FROM FROM node:20`** → `FROM node:20` — duplicate `FROM` keyword removed

2. **`COPY --from=build /app/dist/*`** → `COPY --from=build /app/dist`** — using `/*` with `COPY` can miss nested folders or fail silently; copying the whole directory is safer and more reliable

3. **Removed the `rm` commands** — deleting `.idea`, `.gitignore`, and `README.md` inside the container is unnecessary. These files don't end up in the final image anyway since you're using a **multi-stage build** (only the `nginx` stage is shipped). You should instead use a `.dockerignore` file to keep them out of the build context entirely.

### Recommended `.dockerignore`
```
.idea
.git
.gitignore
README.md
node_modules
dist