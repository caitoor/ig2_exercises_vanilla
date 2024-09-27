function getRowsColumns() {
    clearStage();

    const diameter = 10;
    const circleCount = 200;
    const columnsPerBlock = 5;
    const rowsPerBlock = 5;
    const columnsCount = 2;
    const blockGap = 10;
    const regularCount = 122;
    const secondColor = 'red';

    const circlesPerBlock = columnsPerBlock * rowsPerBlock;

    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        if (i > regularCount) {
            circle.style.backgroundColor = secondColor;
        }

        const blockNumber = Math.floor(i / circlesPerBlock);
        const blockRow = Math.floor(blockNumber / columnsCount);
        const blockColumn = blockNumber % columnsCount;

        // Calculate block position
        const blockX = blockColumn * (blockGap + columnsPerBlock * diameter * 2);
        const blockY = blockRow * (blockGap + rowsPerBlock * diameter * 2);

        // Position within the block
        const circleNumber = i % circlesPerBlock;
        const circleRow = Math.floor(circleNumber / columnsPerBlock);
        const circleColumn = circleNumber % columnsPerBlock;
        const circleX = circleColumn * diameter * 2;
        const circleY = circleRow * diameter * 2;

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";
        circle.style.left = blockX + circleX + "px";
        circle.style.top = blockY + circleY + "px";

        stage.appendChild(circle);
    }
}


function getCSSRowsColumns() {
    clearStage();

    const diameter = 10;
    const circleCount = 200;
    const columnsPerBlock = 5;
    const rowsPerBlock = 5;
    const columnsCount = 2;
    const blockGap = 20;
    const regularCount = 122;
    const secondColor = 'red';

    const circlesPerBlock = columnsPerBlock * rowsPerBlock;
    const blockWidth = columnsPerBlock * diameter * 2 - diameter;
    const blockHeight = rowsPerBlock * diameter * 2 - diameter;

    stage.style.display = "grid";
    stage.style.gridTemplateColumns = `repeat(${columnsCount}, ${blockWidth}px)`;
    stage.style.gridTemplateRows = `repeat(${Math.ceil(circleCount / circlesPerBlock / columnsCount)}, ${blockHeight}px)`;
    stage.style.gridGap = `${blockGap}px`;

    for (let i = 0; i < Math.ceil(circleCount / circlesPerBlock); i++) {
        const block = document.createElement("div");
        block.style.display = "grid";
        block.style.gridTemplateColumns = `repeat(${columnsPerBlock}, ${diameter * 2}px)`;
        block.style.width = `${blockWidth}px`;
        block.style.height = `${blockHeight}px`;
        block.style.alignContent = "space-between";
        block.style.justifyItems = "center";

        stage.appendChild(block);

        for (let j = 0; j < circlesPerBlock && i * circlesPerBlock + j < circleCount; j++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");

            if (i * circlesPerBlock + j > regularCount) {
                circle.style.backgroundColor = secondColor;
            }

            circle.style.position = "relative";
            circle.style.width = diameter + "px";
            circle.style.height = diameter + "px";
            circle.style.borderRadius = "50%";

            block.appendChild(circle);
        }
    }
}