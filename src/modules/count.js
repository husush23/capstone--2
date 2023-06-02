const container = document.querySelector('.cards-container');

// Movies count
setTimeout(() => {
  const len = container.children.length;
  document.querySelector('.movies').innerHTML = `Movies(${len})`;
}, 1000);
