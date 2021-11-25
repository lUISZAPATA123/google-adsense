FROM node:16
COPY . /app
WORKDIR /app

# ENV MONGO_URL "mongodb://mongo:27017"
# ENV DB_NAME points
# ENV COL_NAME dataPoints

RUN  yarn install

COPY . .

RUN yarn run  build

EXPOSE 3000

CMD ["yarn","start"]
