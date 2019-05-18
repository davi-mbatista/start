import { html, render } from 'lit-html';

import './style.css';

const hello = () => html`
    <div class="splash">
        <div class="lit-logo">lit-html</div>
        <div>Open <mark>src/index.js</mark> to get started.</div>
    </div>
`;

render(hello(), document.body);
