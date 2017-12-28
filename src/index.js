import _ from 'lodash'
import './style.css'
import './style2.css'
import icon from '../content/images/bg.png'

import data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.classList.add('hello2');
    // Add the image to our existing div.
   var myIcon = new Image();
   myIcon.src = icon;

   element.appendChild(myIcon);
   
   console.log(data);

  return element;
}

document.body.appendChild(component());