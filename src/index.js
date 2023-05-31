import './styles/main.scss';
import './assets/11467.png';
import display from './modules/display.js';
import fetchData from './modules/getMovies';

import updateLikes from './modules/updateLikes';

fetchData();
display();
updateLikes();
