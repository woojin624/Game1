var tetris = document.querySelector("#tetris");
var tetrisData = [];

function 칸만들기() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 20; i++) {
    var tr = document.createElement("tr");
    var arr = [];
    tetrisData.push(arr);
    fragment.appendChild(tr);
    for (var j = 0; j < 10; j++) {
      var td = document.createElement("td");
      tr.appendChild(td);
      arr.push(0);
    }
  }
  console.log(tetrisData);
  tetris.appendChild(fragment);
}

window.addEventListener("keyDown", function(e) {
  switch (e.code) {
    case "ArrowRight": //오른쪽 이동
      console.log("ArrowRight");
      break;
    case "ArrowLeft": //왼쪽 이동
      console.log("ArrowLeft");
      break;
    case "ArrowDown": // 아래쪽 이동
      console.log("ArrowDown");
      break;
    default:
      break;
  }
});
window.addEventListener("keyUp", function(e) {
  switch (e.code) {
    case "Space": //한방에 내리기
      console.log("Space");
      break;
    case "ArrowUp": // 방향전환
      console.log("ArrowUp");
      break;
    default:
      break;
  }
});

칸만들기();
