FROM node:12.18.4-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["node", "./src/server.js"]