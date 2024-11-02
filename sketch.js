let angle = 0; // 用於旋轉文字的角度
let spacing = 100; // 圓圈和十字之間的間距

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER); // 設定文字對齊方式為中心
  textSize(100); // 設定字體大小
  angleMode(DEGREES); // 設定角度模式
}

function draw() {
  background("#f2e9e4"); // 背景顏色

  // 根據滑鼠位置控制圓圈的大小
  let circleSize = map(mouseY, 0, height, 20, 60); // 滑鼠Y軸控制圓圈大小

  // 繪製全頁網格的圓圈和十字線
  for (let x = 0; x <= width; x += spacing) {  // 水平迴圈
    for (let y = 0; y <= height; y += spacing) { // 垂直迴圈
      // 繪製圓圈
      fill(150, 200, 250, 100); // 設定圓圈顏色和透明度
      noStroke();
      ellipse(x, y, circleSize); // 根據滑鼠位置設置圓圈大小

      // 繪製十字交錯線條
      stroke(100, 150, 200); // 設定線條顏色
      strokeWeight(2);
      line(x - spacing / 2, y, x + spacing / 2, y); // 水平線
      line(x, y - spacing / 2, x, y + spacing / 2); // 垂直線
    }
  }

  // 旋轉並變色的文字
  push();
  translate(width / 2, height / 2); // 將原點移至畫布中心
  rotate(angle); // 讓文字旋轉
  angle += 1; // 控制旋轉速度

  fill(random(255), random(255), random(255)); // 隨機顏色
  text("CHUNWEI", 0, 0); // 顯示文字
  pop();
}





