/*eslint-disable*/
export const container = document.querySelector('.cards-container');

setTimeout(() => {
  const len = container.children.length;
  document.querySelector('.movies').innerHTML = `Movies(${len})`;
}, 1000);
