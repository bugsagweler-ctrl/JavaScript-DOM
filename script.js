const ingredientsList = ["Dragon Scale", "Phoenix Feather", "Unicorn Horn"];

const spellArea = document.getElementById("spellArea");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");


generateButton.addEventListener('click', startMagic);

function startMagic() {
    let count = 3;
    spellArea.textContent = count;

    const timer = setInterval(() => {
        count--;
        if (count > 0) {
            spellArea.textContent = count;
        } else {
            clearInterval(timer);

            const ingredient =
                ingredientsList[Math.floor(Math.random() * ingredientsList.length)];

            spellArea.textContent = `${ingredient}`;
            spellArea.style.backgroundColor =
                `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    }, 1000); 
}

resetButton.addEventListener('click', () => {
    spellArea.textContent = "";
    spellArea.style.backgroundColor = "";
});
