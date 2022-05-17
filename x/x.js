number =prompt("Select a board size")

let items = [];
for (row = 1; row <= number; row++) {
  for (column = 1; column <= number; column++) {
    let box = creat(row, column);
    items.push(box);
  }
}

function creat(row, column, select) {
  return {
    row,
    column,
    select,
  };
}

items.forEach((v, i) => {
//   let element = document.createElement("div");
  let element = document.createElement("td");
  element.id = i;
  element.className = "empty";
//   board.append(element);
board.append(element)
if ((i+1)%number==0){
    board.innerHTML+="</tr></tr>"
}
});

board.onclick = (v)=> v.target.className="image1"
