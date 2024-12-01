document.addEventListener('DOMContentLoaded', () => {
    const mouseButton = document.getElementById('mouseButton');
    const mouseOutput = document.getElementById('mouseOutput');
    mouseButton.addEventListener('click', () => {
        mouseOutput.textContent = 'Button clicked! Keep learning about Cyber Security!';
    });
    const keyboardInput = document.getElementById('keyboardInput');
    const keyboardOutput = document.getElementById('keyboardOutput');
    keyboardInput.addEventListener('keyup', (event) => {
        keyboardOutput.textContent = `You typed: ${event.target.value}`;
    });
    const sampleForm = document.getElementById('sampleForm');
    const formOutput = document.getElementById('formOutput');
    sampleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameValue = document.getElementById('nameInput').value;
        if (nameValue.trim() === '') {
            formOutput.textContent = 'Please enter a valid name.';
        } else {
            formOutput.textContent = `Form submitted! Welcome, ${nameValue}!`;
            sampleForm.reset();
        }
    });
});
