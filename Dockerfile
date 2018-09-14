# Do the npm install or yarn install in the full image
FROM mhart/alpine-node:10 as BASE
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:base-8
WORKDIR /app
COPY --from=BASE /app .
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]