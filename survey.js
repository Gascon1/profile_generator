const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question(`What\'s an activity you like doing? `, (activity) => {
    rl.question('What do you listen to while doing that? ', (song) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (food) => {
        rl.question('Which sport is your absolute favourite? ', (sport) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {

            console.log(`Hey ${name}, I hear you like ${activity}. You typically listen to ${song} when doing that, great choice. My favorite meal is also ${food}. ${sport} is pretty cool, but for me, I prefer watching. ${superpower} is awesome!`)
            rl.close();
          });
        });
      });
    });
  });
});