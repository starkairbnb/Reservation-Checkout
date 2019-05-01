FROM node:10
WORKDIR /Reservation-Checkout
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start" ]
