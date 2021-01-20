FROM Doggcheems/doggywhatsapp:latest

RUN git clone https://github.com/Doggycheems/doggywhatsapp /root/doggywhatsapp
WORKDIR /root/doggywhatsapp/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
