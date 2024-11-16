FROM mcr.microsoft.com/playwright:v1.48.1-noble
WORKDIR /app
COPY package*.json ./
RUN npm install
USER pwuser
ENTRYPOINT [ "node" ]