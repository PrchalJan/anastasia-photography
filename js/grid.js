export const grid = function() {

function setGridsWidths(grids, colCount) {
  for(let i = 0; i < grids.length; i++) {
    grids[i].style.width = ((100 / colCount) + '%');
  }
}
// Needed for resizing
function resetGridsPositions(grids) {
  for(let i = 0; i < grids.length; i++) {
		grids[i].style.top = 0;
		grids[i].style.left = 0;
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
function renderGrid(grid, columns){
  var colCount = columns || 1;
  var grids = grid.children;

  setGridsWidths(grids, colCount);
  resetGridsPositions(grids);
  placeGrids(grids, colCount);
  setGridContainerHeight(grids, colCount);
}


function renderResponsiveGrid(grid) {
  if(window.innerWidth < 601) {
    return renderGrid.call(this, grid, 2);
  } else if(window.innerWidth < 1250){
    return renderGrid.call(this, grid, 3);
  } else {
    return renderGrid.call(this, grid, 4);
  }
}

window.renderArchiveGrid = function() {
  var grid = document.querySelector('.archive__content');
  return renderResponsiveGrid.call(this, grid)
}

window.renderArchiveGridOnResize = function() {
  if(sectionStates.archive) {
    renderArchiveGrid();
    setTimeout(function() {
      renderArchiveGrid();
      setTimeout(function() {
        renderArchiveGrid();
      }, 100)
    }, 100)
  }
}


// Call the functions
window.addEventListener("load", function() {
  renderArchiveGrid();
}, false);








}

