/*Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: '1sessiz', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*Admin Olmadan Grubu Nasıl Sessize Alabilirim ki?*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Grup 1 dakika süreyle susturuldu!*');

    await new Promise(r => setTimeout(r, 60000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Pekâlâ Patron. Sohbet tekrardan açılmıştır!*');

}));

Asena.addCommand({pattern: '1quiet', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 1 minute!*');

    await new Promise(r => setTimeout(r, 60000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '2sessiz', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*Admin Olmadan Grubu Nasıl Sessize Alabilirim ki?*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Grup 2 dakika süreyle susturuldu!*');

    await new Promise(r => setTimeout(r, 120000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Pekâlâ Patron. Sohbet tekrardan açılmıştır!*');

}));

Asena.addCommand({pattern: '2quiet', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 2 minute!*');

    await new Promise(r => setTimeout(r, 120000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '5sessiz', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*Admin Olmadan Grubu Nasıl Sessize Alabilirim ki?*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Grup 5 dakika süreyle susturuldu!*');

    await new Promise(r => setTimeout(r, 300000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Pekâlâ Patron. Sohbet tekrardan açılmıştır!*');

}));

Asena.addCommand({pattern: '5quiet', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 5 minute!*');

    await new Promise(r => setTimeout(r, 300000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '10sessiz', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*Admin Olmadan Grubu Nasıl Sessize Alabilirim ki?*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Grup 10 dakika süreyle susturuldu!*');

    await new Promise(r => setTimeout(r, 600000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Pekâlâ Patron. Sohbet tekrardan açılmıştır!*');

}));

Asena.addCommand({pattern: '10quiet', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 10 minute!*');

    await new Promise(r => setTimeout(r, 600000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '20sessiz', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*Admin Olmadan Grubu Nasıl Sessize Alabilirim ki?*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Grup 20 dakika süreyle susturuldu!*');

    await new Promise(r => setTimeout(r, 1200000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Pekâlâ Patron. Sohbet tekrardan açılmıştır!*');

}));

Asena.addCommand({pattern: '20quiet', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 20 minute!*');

    await new Promise(r => setTimeout(r, 1200000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '30sessiz', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*Admin Olmadan Grubu Nasıl Sessize Alabilirim ki?*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Grup 30 dakika süreyle susturuldu!*');

    await new Promise(r => setTimeout(r, 1800000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Pekâlâ Patron. Sohbet tekrardan açılmıştır!*');

}));

Asena.addCommand({pattern: '30quiet', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 30 minute!*');

    await new Promise(r => setTimeout(r, 1800000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '60sessiz', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*Admin Olmadan Grubu Nasıl Sessize Alabilirim ki?*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Grup 1 saat süreyle susturuldu!*');

    await new Promise(r => setTimeout(r, 3600000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Pekâlâ Patron. Sohbet tekrardan açılmıştır!*');

}));

Asena.addCommand({pattern: '60quiet', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for one hours!*');

    await new Promise(r => setTimeout(r, 3600000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '24sessiz', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*Admin Olmadan Grubu Nasıl Sessize Alabilirim ki?*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Grup 1 gün süreyle susturuldu!*');

    await new Promise(r => setTimeout(r, 8640000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Pekâlâ Patron. Sohbet tekrardan açılmıştır!*');

}));

Asena.addCommand({pattern: '24quiet', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for one day!*');

    await new Promise(r => setTimeout(r, 86400000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: 'infomute', fromMe: true,}, (async (message, match) => {

    await message.sendMessage('*Codded by @phaticusthiccy*\n🇹🇷 Grubu sessize alır.\n🇬🇧 Closes the chat.\n\n💻Usage: *.1sessiz* / *.1quite*\n💻Usage: *.2sessiz* / *.2quite*\n💻Usage: *.5sessiz* / *.5quite*\n💻Usage: *.10sessiz* / *.10quite*\n💻Usage: *.20sessiz* / *.20quite*\n💻Usage: *.30sessiz* / *.30quite*\n💻Usage: *.60sessiz* / *.60quite*\n💻Usage: *.24sessiz* / *.24quite*');                

}));
