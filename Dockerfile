FROM isortegah/nodejs:v8.5.0
ADD package.json /app/user/
ADD package-lock.json /app/user/
ADD . /app/user/

WORKDIR /app/user
RUN npm install

CMD node app.js

