FROM fusuf/whatsasena:publicbeta

RUN git clone https://github.com/doggycheems/doggywhatsapp /root/doggywhatsapp
RUN mkdir /root/doggywhatsapp/bin/
WORKDIR /root/doggywhatsapp/

ENV TZ=Europe/Istanbul
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

CMD ["node", "bot.js"]
