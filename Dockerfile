FROM node:18-alpine

RUN apk add --no-cache git

RUN git clone https://github.com/eugeniomazzone/chromoscope.git
WORKDIR /chromoscope

RUN yarn install
CMD ["yarn","start","--host","--port","8080","--cors","--base", "/chromoscope/"]
