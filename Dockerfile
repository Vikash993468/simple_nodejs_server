FROM node:slim
WORKDIR /vikash
COPY . .
RUN npm install
EXPOSE 4000
CMD npm start
