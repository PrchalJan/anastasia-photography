export const grid = function() {

function setGridsWidth(grids, colCount) {
  for(let i = 0; i < grids.length; i++) {
    grids[i].style.width = ((100 / colCount) + '%');
    // console.log(grids[i]);
  }
}
function placeGrids(grids,colCount) {
  let newleft, newtop;
  for(let i = 1; i < grids.length; i++){
    if (i % colCount == 0) {
      newtop = (grids[i-colCount].offsetTop + grids[i-colCount].offsetHeight);
        grids[i].style.top = newtop + "px";
    } else {
      if(grids[i-colCount]){
        newtop = (grids[i-colCount].offsetTop + grids[i-colCount].offsetHeight);
        grids[i].style.top = newtop + "px";
      }
      newleft = (grids[i-1].offsetLeft + grids[i-1].offsetWidth);
      grids[i].style.left = newleft + "px";	
    }
  }
}
function setGridContainerHeight(grids, colCount) {
  var container = grids[0].parentElement;
  var containerHeight = 0;
  for(var i = ((grids.length - colCount)-1); i < grids.length; i++) {
    let topPosition = grids[i].offsetTop;
    let height = parseInt(getComputedStyle(grids[i]).height);
    let newContainerHeight = topPosition + height;
    if(containerHeight > newContainerHeight) {
      continue;
    } else {
      containerHeight = newContainerHeight;
    }
  }
  container.style.height = (containerHeight) + 'px';
}

function renderGrid(columns){
  var colCount = columns || 1;
  var grids = document.querySelectorAll('.archive__figure');

  setGridsWidth(grids, colCount)
  placeGrids(grids, colCount);
  setGridContainerHeight(grids, colCount);
}
window.addEventListener("load", function() {
  renderGrid(3);
}, false);
window.addEventListener("resize", function() {
  renderGrid(3);
}, false);




}

