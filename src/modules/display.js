import fetchData from './getMovies.js';

const display = async () => {
  const res = await fetchData();

  res.forEach((res, i) => {
    const src = res.image.original;
    const { name } = res;

    const container = document.querySelector('.cards-container');

    container.innerHTML += `
      <div class="card" id = "${i}">
      <img id="img" src="${src}" alt="" />
      <div class="p1">
        <h2 class="f-name">${name}</h2>
        <div class="linkes"> 
          <span><i class="fa-regular fa-heart" data-card-id="1" id="${i}"></i></span>
         <p> <span class="likes-count" id="${i}">${0}</span> Likes</p>
        </div>
      </div>
    
      <div class="comment">
        <i class="fa-solid fa-comment"></i>
        <span class="material-symbols-outlined"> book_online </span>
      </div>
    </div>
        `;
  });
};
export default display;

// async function printItems(array) {
//   await asyncForEach(array, async (item) => {
//     console.log(item);
//   });
// }

// printItems(doDuring);
