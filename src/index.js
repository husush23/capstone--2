/*eslint-disable*/
import './styles/main.scss';
import {display} from './modules/display.js';

import updateLikes from './modules/updateLikes.js';
import './modules/addLikes.js';
import './modules/modalBox.js';
import './modules/createComment.js';
import './modules/getComment.js';
import './modules/commentsToUI';
import './modules/count.js';

display();
updateLikes();

// document.body.addEventListener('click', e => {
//   console.log(e.target);
// });
