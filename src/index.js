import { html, render } from 'lit-html';

import './style.css';

const hello = () => html`
    <div class="splash">Start here - lit-html</div>
`;

render(hello(), document.body);
