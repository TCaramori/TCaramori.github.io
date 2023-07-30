let clickCount = 0;

const clickButton = document.getElementById('clickButton');
const clickCountElement = document.getElementById('clickCount');

clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountElement.innerText = `${clickCount} ${clickCount === 1 ? 'clique' : 'cliques'}`;
});
