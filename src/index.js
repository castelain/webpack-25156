import './index.css';
import imgSrc from '../assents/c7n.jpg';

// const createDiv = () => {
//     let div = document.createElement('div');
// }

const createImage = () =>  {
    let img = new Image();
    img.setAttribute('src', imgSrc);
    img.classList.add('flex-item');

    return img;
}

const createIcon = () => {
    let icon = document.createElement('link');
    icon.type = 'image/x-icon';
    icon.rel = 'shortcut icon';
    icon.href = '../favicon.ico';

    return icon;
} 

let body = document.body;
body.classList.add('flex-container');


document.getElementsByTagName('head')[0].appendChild(createIcon());
body.appendChild(createImage());
