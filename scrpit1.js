const elementContainer = document.getElementById('elementContainer');
const replaceButton = document.getElementById('replaceButton');
const removeButton = document.getElementById('removeButton');
replaceButton.addEventListener('click', () => {
    const existingElement = document.getElementById('element1');
    if (existingElement) {
        existingElement.textContent = 'Winter is the best season!';
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'element1';
        newElement.textContent = 'Winter is the best season!';
        elementContainer.prepend(newElement);
    }
});
removeButton.addEventListener('click', () => {
    const elementToRemove = document.getElementById('element2');
    if (elementToRemove) {
        elementContainer.removeChild(elementToRemove);
    } else {
        alert('The second statement has already been removed.');
    }
});