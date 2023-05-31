import './styles/main.scss';
import './assets/11467.png';
import display from './modules/display.js';
import fetchData from './modules/getMovies';
import createLike from './modules/createLikes';
import getItemLikes from './modules/getLikeCount';
import updateLikes from './modules/updateLikes';
import './modules/addLikes.js';
import './modules/modalBox.js';
import './modules/createComment.js';
import './modules/getComment.js';

display();
updateLikes();
