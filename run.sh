nvm use 12
forever start -a -l server.js.log.out server.js
forever start -a -l bot.js.log.out bot.js
forever list