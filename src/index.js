import './style.css';
import JSLogo from './JSLogo.svg';

const splashElement = document.createElement('div');

splashElement.className = 'splash';
splashElement.innerHTML = `<img src="${JSLogo}" alt="JavaScript logo"/> <div> Open <mark>src/index.js</mark> to get started.</div>`;

document.body.appendChild(splashElement);
