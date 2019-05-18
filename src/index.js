import { h, render } from 'preact';

import './style.css';

render(
    <div className="splash">
        <svg width="120" viewBox="0 0 24 28" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(0.315789, 0.526316)">
                    <polygon
                        fill="#673AB8"
                        fillRule="nonzero"
                        points="11.6842105 0 23.3527633 6.73684211 23.3527633 20.2105263 11.6842105 26.9473684 0.0156577174 20.2105263 0.0156577174 6.73684211"
                    />
                    <ellipse
                        stroke="#FFFFFF"
                        strokeWidth="0.842105263"
                        transform="translate(11.684211, 13.473684) rotate(52.500000) translate(-11.684211, -13.473684) "
                        cx="11.6842105"
                        cy="13.4736842"
                        rx="3.94736842"
                        ry="10.3157895"
                    />
                    <ellipse
                        stroke="#FFFFFF"
                        strokeWidth="0.842105263"
                        transform="translate(11.684211, 13.473684) rotate(-52.500000) translate(-11.684211, -13.473684) "
                        cx="11.6842105"
                        cy="13.4736842"
                        rx="3.94736842"
                        ry="10.3157895"
                    />
                    <circle
                        fill="#FFFFFF"
                        fillRule="nonzero"
                        cx="11.6842105"
                        cy="13.4736842"
                        r="1.78947368"
                    />
                </g>
            </g>
        </svg>
        <div>
            Open <mark>src/index.js</mark> to get started.
        </div>
    </div>,
    document.body
);
