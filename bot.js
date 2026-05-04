const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'morestable.falixsrv.me',
  port: 25565,
  username: 'AFK_Bot',
  version: '1.21.1'
});

bot.on('spawn', () => {
  console.log("SUCCESS: Bot is online!");
  
  // Moves every 10 seconds
  setInterval(() => {
    const moves = ['forward', 'back', 'left', 'right'];
    const move = moves[Math.floor(Math.random() * moves.length)];
    bot.setControlState(move, true);
    setTimeout(() => bot.setControlState(move, false), 1000);
  }, 10000);

  // Chats every 5 minutes
  setInterval(() => {
    bot.chat("Working... " + new Date().toLocaleTimeString());
  }, 300000);
});

bot.on('end', () => {
  console.log("Disconnected. Reconnecting...");
  setTimeout(() => process.exit(), 5000);
});
