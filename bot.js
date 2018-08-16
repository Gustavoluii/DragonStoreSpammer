const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "dg.css/>";

bot.login(process.env.BOT_TOKEN);

bot.on("ready", function() {
    console.log("Estou online");
});

bot.on("ready", () => {
    bot.user.setGame("dragoncss.com")
});

bot.on("guildMemberAdd", member => {
    bot.guilds.get(member.guild.id).members.get(member.id).sendMessage("Seja Bem-vindo a DragonStore! :loudspeaker: "+member+"\n\n**Quem somos nós?**\n\nSomos uma loja de minecraft, com o intuito de vender as contas e capas da optifine.\n\n**Produtos e Preços**\n\nMinecraft Full Acesso: R$9,50\nCapa da Optifine: R$17,99\nConta Alternativa: R$0,50\n\n**Formas de pagamento**\n\nAceitamos apenas MercadoPago.\n\n`PARA COMPRAR QUALQUER PRODUTO ACESSE:` dragoncss.com\nhttps://discord.gg/kkKAPKV");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = PREFIX;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    if (cmd === `${prefix}<newmsping>`){
        if(!message.member.hasPermission("ADMINISTRATOR"));
        const ms = await message.channel.send("Calculando...");
        const clientms = ms.createdTimestamp - message.createdTimestamp;
        ms.edit('Meu Ping: ' + Math.round(bot.ping) + 'ms');
    }

});
