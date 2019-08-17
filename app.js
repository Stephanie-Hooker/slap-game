let target = {
  name: "smiling emoji",
  health: 100,
  hits: 0,
  items: [],
};

//3 items in an object that modify health and reduce it further when clicked
let items = {
  shield: {
    name: "shield",
    modifier: -1, //reduces health by extra 1
    description: "It hurts me!"
  },
  sword: {
    name: "sword",
    modifier: -2, // reduces health by extra 2
    description: "Ouch!"
  },
  kungFu: {
    name: "kung fu",
    modifier: -3, // reduces health by extra 3
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
function giveKungFu() {
  target.items.push(items.kungFu);
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
  if (target.health > 100)
    target.health = 100;
}
if (target.health < 0) {
  target.health = 0;
  update();
}

//reduce health by 1 increase hits by 1
function slap() {
  target.health -= 1 + addMods();
  target.hits++;
  update();
}

//reduce health by 5 increase hits by 1
function punch() {
  target.health -= 5 + addMods();
  target.hits++;
  update();
}

//reduce health by 10, increase hits by 1
function kick() {
  target.health -= 10 + addMods();
  target.hits++;
  update();
}




function update() {
  //add validateHealthFunction to update function so health total is checked after every hit
  validateHealthFunction();
  let targetHealthElement = document.querySelector("#health")
  targetHealthElement.textContent = target.health.toString()
  let targetHitsElement = document.querySelector("#hits")
  targetHitsElement.textContent = target.hits.toString()

}


update()