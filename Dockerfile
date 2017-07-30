FROM isortegah/nodejs_8_2_1:v1
ADD package.json /app/user/
ADD package-lock.json /app/user/
ADD . /app/user/

WORKDIR /app/user
RUN npm install

CMD node app.js

