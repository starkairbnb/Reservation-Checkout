FROM node:10
WORKDIR /Reservation-Checkout
COPY . .
RUN npm install
EXPOSE 3003
CMD [ "npm", "run", "start" ]
