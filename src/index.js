import './styles/main.scss';
import './assets/11467.png';
import display from './modules/display.js';
import fetchData from './modules/getMovies';
import createLike from './modules/createLikes';
import getItemLikes from './modules/getLikeCount';
import updateLikes from './modules/updateLikes';
import { addComment, getComment } from './modules/addcomments.js';

fetchData();
display();
