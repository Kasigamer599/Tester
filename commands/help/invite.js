const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "Invite",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<:dr_heart:817449378792472636>[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=744597377406599188&permissions=8&scope=bot) or [Offcial Server](https://discord.gg/HGDzJkE2Qc)<:dr_heart:817449378792472636>`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY BUNNY`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}