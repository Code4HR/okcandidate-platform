FROM node:6.10-alpine

RUN mkdir -p /usr/src/app

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 3000 for node, and 5858 or 9229 for debug
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 5858 9229

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK CMD curl -fs http://localhost:$PORT || exit 1

RUN apk add --no-cache python make g++

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /usr/src
COPY package.json /usr/src/
RUN npm install && npm cache clean
ENV PATH /data/node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
WORKDIR /usr/src/app
COPY . /usr/src/app


# if you want to use npm start instead, then use `docker run --init in production`
# so that signals are passed properly. Note the code in index.js is needed to catch Docker signals
# using node here is still more graceful stopping then npm with --init afaik
# I still can't come up with a good production way to run with npm and graceful shutdown
CMD [ "node", "index.js" ]
