const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function getMagic8Response() {
  const idx = Math.floor(Math.random() * magic8Responses.length);
  return magic8Responses[idx];
}

function getMagic8Page() {
  const message = getMagic8Response();
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        width: 100vw;
        height: 100vh;
        display: grid;
        justify-items: center;
        place-items: center;
      }

      .ball {
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background-color: black;
        background: radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(101,100,100,.8) 100%);
        display: grid;
        justify-items: center;
        place-items: center;
      }

      .ball__display {
        width: 60%;
        height: 60%;
        border-radius: 50%;
        background-color: rgb(36, 7, 108);
        display: grid;
        justify-items: center;
        place-items: center;
        margin-top: -50px;
        margin-left: -50px;
      }

      .ball__display-text {
        text-align: center;
        font-size: 20px;
        color: white;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Magic 8 Ball</title>
  </head>
  <body>
    <div class="ball">
      <div class="ball__display">
        <div class="ball__display-text">
          ${message}
        </div>
      </div>
    </div>
  </body>
</html>
`;
}

module.exports = { getMagic8Response, getMagic8Page };
