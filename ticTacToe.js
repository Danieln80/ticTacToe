let countsumcards = 0;
const cardopen = [];
let countsteps = 0;
const users = [
  { name: "user1", winers: 0, points: 0 },
  { name: "user2", winers: 0, points: 0 },
];

let creatdiv = document.createElement("div");

clickstart=document.getElementById("submit")

clickstart.addEventListener('click',()=>{
  let sumcards=document.getElementById("numstart").value

  repeatcard = "auto ".repeat(sumcards);
document.getElementById("board").style.gridTemplateColumns = repeatcard;
  
  for (v = 0; v < sumcards; v++) {
    // debugger
    cardopen[v] = [];
    for (i = 0; i < sumcards; i++) {
      // debugger
      let a = [];
      a[i] = document.createElement("div");
      a[i].className = "board";
      id = i;
      countsumcards++;
      b = a[i];
      b.id = countsumcards;
      cardopen[v][i] = { div: b, id: countsumcards };
    }
  }

  
  creatdiv = document.createElement("div");
  for (i in cardopen) {
    cardopen[i].forEach(creatgame);
  }
  users[0].name = document.getElementById("name0").value;
  users[1].name = document.getElementById("name1").value;

document.getElementById("submit").remove()
document.getElementById("numstart").remove()
document.getElementById("name0").remove()
document.getElementById("name1").remove()



repeatcard = ` ${users.length}fr `.repeat(users.length);
document.getElementById("playrs").style.gridTemplateColumns = repeatcard;
repeatcard = ` ${users.length}fr `.repeat(users.length);
document.getElementById("playrs").style.gridTemplateColumns = repeatcard;
document.getElementById("name0").innerHTML = textuser(0);
document.getElementById("name1").innerHTML = textuser(1);
countsteps % 2 == 0 ? document.getElementById("name0").style.backgroundColor="red":document.getElementById("name0").style.backgroundColor="";
    countsteps % 2 != 0 ? document.getElementById("name1").style.backgroundColor="red":document.getElementById("name1").style.backgroundColor="";
// document.getElementById("startgame").style="display:nune;"
})
function textuser(e) {
 
  return `${users[e].name}<br/>winn'S :${users[e].winers}`;
}

  let sumcards=document.getElementById("numstart").value


console.log(cardopen);

const board = document.getElementById("board");

function creatgame(v, i, arr) {
  console.log(v.div.id + "yos");
  // debugger

  const element = document.createElement("div");

  // v.div.id =v.id;
  // v.div.className = "board";
  return document.getElementById("board").appendChild(v.div);
  // return document.getElementById("board").appendChild(element)
}

board.addEventListener("click", (i) => {
  imgX(i),
  setTimeout(() => {
     testwinner3(cardopen,XO = "X")
     ,testwinner3(cardopen,XO = "O");
  }, 1);
});

function imgX(i) {
  if (i.target.className == "board") {
    //    imgxo=(countsteps%2==0)?("x.png"):("./y.png");
    
    
    const immg = document.createElement("img");
    immg.src = countsteps % 2 == 0 ? "./x.png" : "./y.png";
    i.target.className += countsteps % 2 == 0 ? " X" : " O";
    immg.id = "toimg";
    countsteps++;
    countsteps % 2 == 0 ? document.getElementById("name0").style.backgroundColor="red":document.getElementById("name0").style.backgroundColor="";
    countsteps % 2 != 0 ? document.getElementById("name1").style.backgroundColor="red":document.getElementById("name1").style.backgroundColor="";
    console.log(i.target);
    // return i.target.style=`background-image: url(${imgxo});`

    return document.getElementById(i.target.id).appendChild(immg);
  }
}

function testwinner3(cardopen, XO) {
  
  for (i of cardopen) {
    let isXO = 0;
    for (v of i) {
      // console.log((v.div.classList.value.includes(XO)));
      v.div.classList.value.includes(XO) ? isXO++ : (isXO = 0);
      (isXO >= 3)? alert("winner!!!"):null
    }}
  for(i=0; i < sumcards; i++){
    // debugger
    let isXO = 0;
    for (v=0; v < sumcards; v++) {
      // console.log((v.div.classList.value.includes(XO)));
      cardopen[v][i].div.classList.value.includes(XO) ? isXO++ : (isXO = 0);
      (isXO >= 3)? alert("winner!!!up"):null
    }

  }
  for(i = 1; i+2 <= sumcards; i++){
    let isXO = 0;
    for(v = 0; v <sumcards; v++){
      document.getElementById(i+v*(Number(sumcards)+1)).classList.value.includes(XO) ? isXO++ : (isXO = 0);
      (isXO >= 3)? alert("winner!!!\/\\/\/"):null
    }
  }

  for(i = Number(sumcards); i <=3; i--){
    console.log(i+" "+XO);
    let isXO = 0;
    for(v =0; v <sumcards; v++){
      // if(XO=="X") {debugger}
      as=i-v*2
      console.log(i+v*(Number(sumcards)-1));
      document.getElementById(i+v*(Number(sumcards)-1)).classList.value.includes(XO) ? isXO++ : (isXO = 0);
      // console.log(document.getElementById(i+v*sumcards+1).classList.value.includes(XO));
      (isXO >= 3)? alert("winner!!!\/\\/\/"):null
    }
  }
  
  
  
  
  
  }
  function ids(num,plus){
for(i=0;i<num;i++){

}
  }

  document.getElementById("back").addEventListener((e)=>{
    let setout=cardopen.pop()
  })


// function header(){
//   const menu = document.createElement("div");
// menu.className = "header"
// const newGame = document.createElement("input")
// newGame.type = "submit"
//  return menu.appendChild(newGame)

// }

// header()




repeatcard = "auto ".repeat(sumcards);
document.getElementById("board").style.gridTemplateColumns = repeatcard;