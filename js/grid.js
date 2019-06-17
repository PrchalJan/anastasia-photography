export const grid = function() {

// function renderGrid(blocks, cols, padding){
//   var pad = padding || 0;
//   var newleft, newtop;
//   for(var i = 1; i < blocks.length; i++){
//     if (i % cols == 0) {
//       newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
//         blocks[i].style.top = newtop+"px";
//     } else {
//       if(blocks[i-cols]){
//         newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
//         blocks[i].style.top = newtop+"px";
//       }
//       newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
//       blocks[i].style.left = newleft+"px";	
//     }
//     }
// }

// function renderArchiveGrid(cols, padding) {
//   const blocks = document.querySelectorAll('.archive__figure');
//   return renderGrid.call(this, blocks, cols, padding)
// }

// window.document.body.addEventListener('load', function() {
//   renderArchiveGrid(3);
// }, false);

// from scratch

function renderGrid(columns,padding){
  var pad = padding || 0;
  var cols = columns || 1;
  var blocks = document.querySelectorAll('.archive__figure');
  var container = blocks[0].parentElement;
  console.log(container);
  for(let i = 0; i < blocks.length; i++) {
    blocks[i].style.width = ((100 / cols) + '%');
    console.log(blocks[i]);
  }
	var newleft, newtop;
	for(var i = 1; i < blocks.length; i++){
		if (i % cols == 0) {
			newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
		    blocks[i].style.top = newtop+"px";
		} else {
			if(blocks[i-cols]){
				newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
				blocks[i].style.top = newtop+"px";
			}
			newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
			blocks[i].style.left = newleft+"px";	
		}
  }
  
  var containerHeight = 0;
  for(var i = ((blocks.length - cols)-1); i < blocks.length -1; i++) {
    let topPosition = blocks[i].offsetTop;
    let height = parseInt(getComputedStyle(blocks[i]).height);
    let newContainerHeight = topPosition + height;
    if(containerHeight > newContainerHeight) {
      continue;
    } else {
      containerHeight = newContainerHeight;
    }
  }

  var lastBlockTopPosition = blocks[blocks.length -1].offsetTop;
  var lastBlockHeight = parseInt(getComputedStyle(blocks[blocks.length -1]).height);
  console.log(lastBlockTopPosition + lastBlockHeight);
  container.style.height = (containerHeight) + 'px';

}
window.addEventListener("load", function() {
  renderGrid(2);
}, false);
window.addEventListener("resize", function() {
  renderGrid(2);
}, false);




}

