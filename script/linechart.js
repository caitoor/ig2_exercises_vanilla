function getLinechart() {
    clearStage();

    for (let i = 0; i < numbers.length - 1; i++) {
        const point1 = document.createElement("div");
        const point2 = document.createElement("div");

        const x1 = (i / (numbers.length - 1)) * 400;
        const y1 = 200 - numbers[i] * 20;
        const x2 = ((i + 1) / (numbers.length - 1)) * 400;
        const y2 = 200 - numbers[i + 1] * 20;

        const line = document.createElement("div");
        line.style.position = "absolute";
        line.style.height = "2px"; // Thickness of the line
        line.style.backgroundColor = "white";
        line.style.left = x1 + "px";
        line.style.top = y1 + "px";

        const length = Math.hypot(x2 - x1, y2 - y1); // Distance between points
        line.style.width = length + "px";

        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI); // Calculate angle of the line
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = "0 0"; // Rotate from the start of the line

        stage.appendChild(line);
    }
}
