const type = ["archer", "axeman", "swordman", "Medic"];
const warriorimages = [];

function warriorgenerate(numberofwarriors) {
  if (typeof numberofwarriors !== `number`) return;
  const warriors = [];
  for (let index = 0; index <= numberofwarriors; index++) {
    warriors.push(generatesinglewarrior(index));
  }
  return warriors;
}

function generatesinglewarrior() {
  let randompower = _generatepower();
  let randomlevel = _generatelevel();
  var randomtype = _generatetype();

  return {
    power: randompower,
    level: randomlevel,
    type: randomtype,
    damage: randomlevel * randompower,
    image: _generateimg(),
  };
  function _generatepower() {
    let power = Math.ceil(Math.random() * 100);
    return power;
  }
  function _generatelevel() {
    let level = Math.floor(Math.random() * 10);
    return level;
  }
  function _generatetype() {
    return type[Math.floor(Math.random() * type.length)];
  }
  function _generateimg() {
    if (randomtype === "axeman") {
      return "https://i.pinimg.com/originals/d0/0a/6c/d00a6ce9f99ae4d71013424df7900918.jpg";
    } else if (randomtype === "archer") {
      return "https://eme03.enmasse-game.com/images/tera/race-class/classpage/class_Highlight_Archer.png";
    } else if (randomtype === "swordman") {
      return "https://2.bp.blogspot.com/-PFMMdlh2Vlk/UReYfMgLRAI/AAAAAAAAAJ8/GG8UNB1Xb2I/s1600/3.jpg";
    } else {
      return "https://pbs.twimg.com/profile_images/1216876966894362624/dHy2OF7h_400x400.jpg";
    }
  }
}
document.querySelector("#generatebtn").addEventListener("click", function () {
  let newwarrior = generatesinglewarrior();
  //warriorcard
  let warriorcard = document.createElement("div");
  warriorcard.style.border = "solid blue";
  warriorcard.style.width = "200px";
  warriorcard.style.height = "200px";
  warriorcard.style.display = "inline-block";
  //warriorpower
  let warriorpwr = document.createElement("span");
  warriorpwr.innerText = `Power: ${newwarrior.power}`;
  //warriorlevel
  let warriorlvl = document.createElement("span");
  warriorlvl.innerText = ` Level:${newwarrior.level}`;
  //warrior damage
  let warriordmg = document.createElement("span");
  warriordmg.innerText = `Damage: ${newwarrior.damage}`;
  //warrior type
  let warriortype = document.createElement("span");
  warriortype.innerText = `Type ${newwarrior.type}`;
  //image
  let warriorimg = document.createElement("img");
  warriorimg.src = newwarrior.image;
  warriorimg.style.height = "100px";
  warriorimg.style.width = "100px";

  warriorcard.append(warriorimg);
  warriorcard.append(warriortype);
  warriorcard.append(warriordmg);
  warriorcard.append(warriorlvl);
  warriorcard.append(warriorpwr);
  document.body.appendChild(warriorcard);
});
const result = warriorgenerate(50);
console.log(result);

("");
