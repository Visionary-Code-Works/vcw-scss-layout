// src/index.js

import './scss/main.scss';
import '/src/scss/main.scss';

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

// Assuming you have a component that can be dynamically imported
// src/components/largeComponent.js
export function largeComponent() {
  console.log('Large component loaded!');
}
