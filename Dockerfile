FROM node:19-alpine 

WORKDIR /user/src/app

COPY . . 
RUN npm install --production
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
