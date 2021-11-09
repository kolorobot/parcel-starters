export default function App() {
    const div = document.createElement('div');
    div.innerHTML = `
    <label for='text'>Enter some text</label>
    <input id='text' />
    <button>Print</button>`;

    const button = div.querySelector('button');
    const input = div.querySelector('input');

    button.addEventListener('click', () => {
        setTimeout(() => {
            const resultContainer = document.createElement('div');
            resultContainer.innerHTML = `<div data-testid='printed-text'>${input.value}</div>`;
            div.appendChild(resultContainer);
        }, Math.floor(Math.random() * 200));
    });
    return div;
}
