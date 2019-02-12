import { html, render } from 'lit-html';

const hello = name => {
    return html`
        <p>Hello ${name}.</p>
    `;
};

render(hello('World'), document.body);
