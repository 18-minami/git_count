// HTMLから要素を取得する
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

// カウンターの値を格納する変数
let counter = 0;

// カウントアップボタンのクリックイベントを設定する
incrementButton.addEventListener('click', () => {
  counter++;
  counterElement.textContent = counter;
});

// リセットボタンのクリックイベントを設定する
resetButton.addEventListener('click', () => {
  counter = 0;
  counterElement.textContent = counter;
});

const counterElement = document.getElementById('counter');
const dogElement = document.getElementById('dog');
let counter = 0;

setInterval(() => {
  counter++;
  counterElement.textContent = counter;
  dogElement.style.transform = 'translateX(100%)';
}, 1000);

