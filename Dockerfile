ROM fusuf/doggywhatsapp:latest

RUN git clone $GITHUB_REPO_URL /root/doggywhatsapp
WORKDIR /root/doggywhatsapp/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
