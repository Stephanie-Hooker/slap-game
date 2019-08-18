let target = {
  name: "smiling emoji",
  health: 100,
  hits: 0,
  items: [],
  moods: [
    { img: "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Happy_large.png?v=1542436006" },
    { img: "https://i.pinimg.com/originals/7a/77/13/7a771350eeaf2c38c83ecfd1047ddac5.png" },
    { img: "https://media.istockphoto.com/illustrations/emoji-emoticon-beatenup-illustration-id682014838?k=6&m=682014838&s=612x612&w=0&h=nhLXY5d9rA1DKqpMO9oFQGlmZ4pg8KEIVlAvjvM-hjw=" },
  ]
};

//3 items in an object that modify health and reduce damage when clicked
let items = {
  shield: {
    name: "shield",
    modifier: -1, //reduces damage by extra 1
    description: "It hurts me!"
  },
  sword: {
    name: "sword",
    modifier: -2, // reduces damage by extra 2
    description: "Ouch!"
  },
  karate: {
    name: "karate",
    modifier: -3, // reduces damage by extra 3
    description: "My eye!"
  }
};

//create a function to add shield to target.items
function giveShield() {
  target.items.push(items.shield);

}


//create a function to add sword to target.items
function giveSword() {
  target.items.push(items.sword);

}

//create a function to add kung fu to target.items
function giveKarate() {
  target.items.push(items.karate);
}

//create a function called addMods()
function addMods() {
  let total = 0;
  for (let i = 0; i < target.items.length; i++) {
    total += target.items[i].modifier;
  }
  return total;
}

//create a function that enforces the max amount allowed for health at 100, and the min amount at 0.
function validateHealthFunction() {
  if (target.health > 100) {
    target.health = 100;
  }
  if (target.health < 0) {
    target.health = 0;
  }
}

//create a function to reset the game when health == 0
function reset() {
  document.location.reload();
}

//action btn that reduces health by 1
//increase hits by 1
function slap() {
  target.health -= 1 + addMods();
  target.hits++;
  update();
}

//action btn that reduces health by 5
//increase hits by 5
function punch() {
  target.health -= 5 + addMods();
  target.hits++;
  update();
}

//action btn that reduces health by 10
//increase hits by 10
function kick() {
  target.health -= 10 + addMods();
  target.hits++;
  update();
}

function update() {
  //add validateHealthFunction to update function so health total is checked after every hit
  validateHealthFunction();
  let targetHealthElement = document.querySelector("#health");
  targetHealthElement.textContent = target.health.toString();
  let targetHitsElement = document.querySelector("#hits");
  targetHitsElement.textContent = target.hits.toString();
  let imageElement = document.querySelector("#target-image");
  let moodIndex = checkMood();
  let moodObj = target.moods[moodIndex];
  imageElement.src = moodObj.img;
  checkMood();
}


function checkMood() {
  if (target.health <= 40) {
    return 2;
  } else if (target.health <= 70) {
    return 1;
  } else {
    return 0;
  }
}


update()