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
function renderGrid(grids, columns){
  var colCount = columns || 1;
  var grids = document.querySelectorAll('.archive__figure');

  setGridsWidth(grids, colCount)
  placeGrids(grids, colCount);
  setGridContainerHeight(grids, colCount);
}





function renderResponsiveGrid(grids) {
  if(window.innerWidth < 601) {
    return renderGrid.call(this, grids, 2);
  } else{
    return renderGrid.call(this, grids, 3);
  }
}

function renderArchiveGrid() {
  var grids = document.querySelectorAll('.archive__figure');
  return renderResponsiveGrid.call(this, grids)
}



// Call the functions
window.addEventListener("load", function() {
  renderArchiveGrid();
}, false);
window.addEventListener("resize", function() {
  setTimeout(function() {
    renderArchiveGrid();
  }, 1);
}, false);




}

