FROM node:16-alpine
ENV NODE_ENV=production
ENV MONGODB_PASSWORD = "${MONGODB_PASSWORD}"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3001
RUN chown -R node /usr/src/app
USER node
CMD ["node", "index.js"]
