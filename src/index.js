import {cube} from './math.js';
import './style.css';
import _ from 'lodash';

 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
 else{
   console.log('Looks like we are in production mode!');
 }

function component() {
    var element = document.createElement('pre');

	var text = _.join(['Hello webpack code splitting!', 'module', 'loaded!', '5 cubed is equal to '  + cube(5)], ' ');
	
   element.innerHTML = text;
  return element;
}

document.body.appendChild(component());
