FROM node:alpine
WORKDIR  /app
COPY package.json package-lock.json ./
COPY ./ ./
EXPOSE 3000
RUN npm install
CMD ["npm", "run", "start"]