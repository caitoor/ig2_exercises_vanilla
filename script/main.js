const numbers = [1, 3, 6, 9, 3, 6, 2];

const stage = document.getElementById('stage');

function clearStage() {
    stage.innerHTML = '';
    stage.removeAttribute('style');
    stage.className = '';
}