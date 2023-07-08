// Create 16 divs inside 'mainGridContainer', each with 16 flex items inside //

let gridDimension = 16;

const mainGridContainer = document.querySelector(".gridContainer");

// loop for creating and appending each row to 'mainGridContainer'
for (let i = 0; i < gridDimension; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    mainGridContainer.append(row);
}

//const rows = document.querySelectorAll('.')



