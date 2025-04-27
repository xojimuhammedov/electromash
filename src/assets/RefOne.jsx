import React from 'react';

const RefOne = () => {
    return (
        <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
       
            <rect width="800" height="500" fill="#f8f9fa" rx="10" ry="10" />

            <text x="400" y="40" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#333">useRef Hook</text>

            <rect x="50" y="60" width="700" height="410" fill="#fff" stroke="#ddd" stroke-width="2" rx="8" ry="8" />

            <rect x="100" y="100" width="220" height="320" fill="#e6f7ff" stroke="#1890ff" stroke-width="2" rx="8" ry="8" />
            <text x="210" y="130" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#1890ff">React Component</text>

            <rect x="120" y="150" width="180" height="80" fill="#fff" stroke="#1890ff" stroke-width="1" rx="4" ry="4" />
            <text x="130" y="170" font-family="monospace" font-size="14" fill="#333">const inputRef = </text>
            <text x="130" y="190" font-family="monospace" font-size="14" fill="#333">  useRef(null);</text>

            <rect x="480" y="100" width="220" height="150" fill="#f6ffed" stroke="#52c41a" stroke-width="2" rx="8" ry="8" />
            <text x="590" y="130" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#52c41a">DOM Element</text>

            <rect x="500" y="170" width="180" height="40" fill="#fff" stroke="#52c41a" stroke-width="1" rx="4" ry="4" />
            <text x="590" y="195" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">&lt;input /&gt;</text>

            <rect x="480" y="280" width="220" height="140" fill="#fff1f0" stroke="#f5222d" stroke-width="2" rx="8" ry="8" />
            <text x="590" y="310" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#f5222d">Ref Object</text>

            <rect x="500" y="330" width="180" height="60" fill="#fff" stroke="#f5222d" stroke-width="1" rx="4" ry="4" />
            <text x="540" y="360" font-family="monospace" font-size="14" fill="#333">{current: DOM }</text>

            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                </marker>
            </defs>

            <line x1="300" y1="190" x2="480" y2="190" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
            <text x="390" y="175" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">ref={inputRef}</text>

            <line x1="210" y1="230" x2="480" y2="330" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
            <text x="320" y="290" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">inputRef points to</text>

            <line x1="590" y1="210" x2="590" y2="330" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
            <text x="630" y="260" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333">stored in</text>

            <text x="400" y="450" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#333">Asosiy xususiyatlar: DOM elementlariga to'g'ridan-to'g'ri kirish, qayta render bo'lganda ham saqlanadi</text>
        </svg>
    );
}

export default RefOne;
