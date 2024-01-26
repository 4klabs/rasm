const worker = new Worker('worker.js');

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('number').addEventListener('input', (event) => {
    calculate(event);
  });
});

function calculate(event) {
  const number = parseInt(event.target.value);
  if (!number) return;

  worker.postMessage(number);
  worker.onmessage = (event) => {
    document.getElementById('result').textContent = event.data;
  };
}
