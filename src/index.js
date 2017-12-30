import './style.css';

 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
 else{
   console.log('Looks like we are in production mode!');
 }

 function getComponent() {
   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
     var element = document.createElement('div');

     element.innerHTML = _.join(['Hello', 'webpack','code','splitting','dynamic','imports'], ' ');

     return element;

   }).catch(error => 'An error occurred while loading the component');
 }
 
 getComponent().then(component=>{
	 document.body.appendChild(component);
 });
 

