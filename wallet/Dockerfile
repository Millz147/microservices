FROM node:alpine as development
WORKDIR /home/app
COPY package*.json .
RUN npm install
COPY . .

FROM node:alpine as production
WORKDIR /home/app
COPY package*.json .
RUN npm ci --only=production
COPY  --from=development ./dist ./dist
EXPOSE 4004
RUN ["node","dist/index.js"]



