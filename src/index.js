// src/index.js

import './scss/main.scss';
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
export function sum(a, b) {
  return a + b;
}

console.log('Webpack and SCSS setup complete');


document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Load Component';
  button.onclick = () => {
    import('./components/largeComponent').then(({ largeComponent }) => {
      largeComponent();
    });
  };
  document.body.appendChild(button);
});
