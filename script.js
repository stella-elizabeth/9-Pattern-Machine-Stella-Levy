
// constants to store values of input boxes
const rowsBox = document.getElementById("rows");
const columnsBox = document.getElementById("columns");
const submitBox = document.getElementById("submitbutton");
const colorBox = document.getElementById("colors");
const gridBox = document.getElementById("outputgrid");

// event listener for submit button
submitBox.addEventListener("click", createGrid);

// function to make grid correct size and color
function createGrid() {
  gridBox.innerHTML = '';
  const numRows = rowsBox.value;
  const numColumns = columnsBox.value;
  const colorOfGrid = colorBox.value;
  console.log(numRows, numColumns);

  for (let h = 0; h < numRows; h++) {
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.setAttribute('id', `row${h+1}`);
    gridBox.appendChild(newRow);
    
    for (let i = 0; i < numColumns; i++) {
      let newBox = document.createElement('div');
      newBox.classList.add('box');
      newBox.setAttribute('id', `box:r${h+1}c${i+1}`);
      newBox.style.backgroundColor = colorOfGrid;
      newRow.appendChild(newBox);
      newBox.addEventListener("click", changeColor);
      newBox.addEventListener("mouseover", changeColor);
    }
  }
}
// event listener for click on box of grid



function changeColor(event) {
  const colorOfGrid = colorBox.value;
  if (event.type === "click" || (event.type === "mouseover" && event.buttons === 1)) {
    event.target.style.backgroundColor = colorOfGrid;
  }
}