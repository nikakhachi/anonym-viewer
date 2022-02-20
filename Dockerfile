FROM mhart/alpine-node:14
RUN mkdir /app
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app/
RUN npm run build
COPY . /app/