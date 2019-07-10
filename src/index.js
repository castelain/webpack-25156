import './index.css';
import imgSrc from '../assents/c7n.jpg';
// import iconSrc from '../favicon.png'

const createImage = () =>  {
    let img = new Image();
    img.setAttribute('src', imgSrc);
    img.classList.add('flex-item');

    return img;
}

const createIcon = () => {
    let icon = document.createElement('link');
    icon.type = 'image/png';
    icon.rel = 'icon';
    icon.href = '../favicon.png';
    return icon;
} 

let body = document.body;
body.classList.add('flex-container');

document.getElementsByTagName('head')[0].appendChild(createIcon());
body.appendChild(createImage());
