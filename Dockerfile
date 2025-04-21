FROM mcr.microsoft.com/playwright:v1.48.1-noble
WORKDIR /app
COPY package*.json ./
COPY modules ./modules
RUN npm install
RUN mkdir -p /app/output && chown pwuser:pwuser /app/output
USER pwuser
ENTRYPOINT [ "node" ]