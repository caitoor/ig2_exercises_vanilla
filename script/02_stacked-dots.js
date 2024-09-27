function getStackedDots() {
    clearStage();
    const diameter = 10;
    const offsetY = 10;
    const offsetX = 20;

    for (i = 0; i < numbers.length; i++) {
        var xPos = i * (diameter + offsetX);
        for (j = 0; j < numbers[i]; j++) {
            const yPos = j * (diameter + offsetY);
            const circle = document.createElement("div");
            circle.classList.add("circle");
            circle.style.width = diameter + "px";
            circle.style.height = diameter + "px";
            circle.style.left = xPos + "px";
            circle.style.bottom = yPos + "px";
            stage.appendChild(circle);
        }
    }
}


function getCSSStackedDots() {
    clearStage();
    stage.classList.add("css-bar-container");
    const max = getMax(numbers);
    const stageWidth = stage.offsetWidth;
    const stageHeight = stage.offsetHeight

    const offsetY = .2;
    const offsetX = .5;
    const maxDiameterX = stageWidth / (numbers.length * (1 + offsetX));
    const maxDiameterY = stageHeight / (max * (1 + offsetY));
    const diameter = Math.min(maxDiameterX, maxDiameterY);

    for (i = 0; i < numbers.length; i++) {
        const container = document.createElement("div");
        container.classList.add("circlestack-container");
        for (j = 0; j < numbers[i]; j++) {
            const circle = document.createElement("div");
            circle.classList.add("circle", "css-circle");

            circle.style.height = diameter + "px";
            circle.style.width = diameter + "px";
            circle.style.marginTop = diameter * offsetY + "px";
            container.appendChild(circle);
        }
        stage.appendChild(container);
    }
}