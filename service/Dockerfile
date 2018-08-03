FROM node:10.7-alpine
COPY impl/* /server/
RUN cd /server && yarn install
CMD cd /server && yarn run start
