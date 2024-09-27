function getBarchart() {
    clearStage();
    for (i = 0; i < numbers.length; i++) {
        const barHeight = numbers[i] * 20;
        const barWidth = 20;
        const offset = 10;
        const xPos = i * (barWidth + offset);

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = barWidth + "px";
        bar.style.height = barHeight + "px";
        bar.style.left = xPos + "px";
        bar.style.bottom = "0";
        stage.appendChild(bar);
    }
}

function getCSSBarchart() {
    clearStage();
    stage.classList.add("css-bar-container");
    const max = getMax(numbers);

    for (i = 0; i < numbers.length; i++) {
        const barHeight = numbers[i] / max * 100 + "%";
        const bar = document.createElement("div");
        bar.classList.add("bar", "css-bar");

        bar.style.height = barHeight;
        stage.appendChild(bar);
    }
}