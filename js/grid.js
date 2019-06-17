export const grid = function() {

// function renderGrid(grids, colCount, padding){
//   var pad = padding || 0;
//   var newleft, newtop;
//   for(var i = 1; i < grids.length; i++){
//     if (i % colCount == 0) {
//       newtop = (grids[i-colCount].offsetTop + grids[i-colCount].offsetHeight) + pad;
//         grids[i].style.top = newtop+"px";
//     } else {
//       if(grids[i-colCount]){
//         newtop = (grids[i-colCount].offsetTop + grids[i-colCount].offsetHeight) + pad;
//         grids[i].style.top = newtop+"px";
//       }
//       newleft = (grids[i-1].offsetLeft + grids[i-1].offsetWidth) + pad;
//       grids[i].style.left = newleft+"px";	
//     }
//     }
// }

// function renderArchiveGrid(colCount, padding) {
//   const grids = document.querySelectorAll('.archive__figure');
//   return renderGrid.call(this, grids, colCount, padding)
// }

// window.document.body.addEventListener('load', function() {
//   renderArchiveGrid(3);
// }, false);

// from scratch

function setGridBlockElementsWidth(grids, colCount) {
  for(let i = 0; i < grids.length; i++) {
    grids[i].style.width = ((100 / colCount) + '%');
    console.log(grids[i]);
  }
}

function renderGrid(columns){
  var colCount = columns || 1;
  var grids = document.querySelectorAll('.archive__figure');
  var container = grids[0].parentElement;
  setGridBlockElementsWidth(grids, colCount)


	// var newleft, newtop;
	// for(var i = 1; i < grids.length; i++){
	// 	if (i % colCount == 0) {
	// 		newtop = (grids[i-colCount].offsetTop + grids[i-colCount].offsetHeight);
	// 	    grids[i].style.top = newtop+"px";
	// 	} else {
	// 		if(grids[i-colCount]){
	// 			newtop = (grids[i-colCount].offsetTop + grids[i-colCount].offsetHeight);
	// 			grids[i].style.top = newtop+"px";
	// 		}
	// 		newleft = (grids[i-1].offsetLeft + grids[i-1].offsetWidth);
	// 		grids[i].style.left = newleft+"px";	
	// 	}
  // }
  function placeElements(grids,colCount) {
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
  placeElements(grids, colCount);
  
  var containerHeight = 0;
  for(var i = ((grids.length - colCount)-1); i < grids.length -1; i++) {
    let topPosition = grids[i].offsetTop;
    let height = parseInt(getComputedStyle(grids[i]).height);
    let newContainerHeight = topPosition + height;
    if(containerHeight > newContainerHeight) {
      continue;
    } else {
      containerHeight = newContainerHeight;
    }
  }

  var lastBlockTopPosition = grids[grids.length -1].offsetTop;
  var lastBlockHeight = parseInt(getComputedStyle(grids[grids.length -1]).height);
  console.log(lastBlockTopPosition + lastBlockHeight);
  container.style.height = (containerHeight) + 'px';

}
window.addEventListener("load", function() {
  renderGrid(3);
}, false);
window.addEventListener("resize", function() {
  renderGrid(3);
}, false);




}

