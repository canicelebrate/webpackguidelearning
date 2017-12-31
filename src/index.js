import './style.css';
import _ from 'lodash';

 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
 else{
   console.log('Looks like we are in production mode!');
 }

 function component() {

     var element = document.createElement('div');

     element.innerHTML = _.join(['Hello', 'webpack','lazy','loading'], ' ');

	 
	 var button = document.createElement('button');
     var br = document.createElement('br');

     button.innerHTML = 'Click me and look at the console!';
     element.appendChild(br);
     element.appendChild(button);

   
     // Note that because a network request is involved, some indication
     // of loading would need to be shown in a production-level site/app.
     button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     var print = module.default;

     print();
   });


     return element;

 }

document.body.appendChild(component());

 

