// import _ from 'lodash';
// import printMe from './print.js';
// import './style.css';
import { cube } from './math.js';

function component(){
    //  var element = document.createElement("div");
    //  var btn = document.createElement('button');

    //  element.innerHTML = _.join(["webpack"],'');

    //  btn.innerHTML = 'Click me and check the console';
    //  btn,onclick = printMe;

    //  element.appendChild(btn);
    
     var element = document.createElement('pre');
     element.innerHTML = [
         'hello webpack',
         '5 cubed is equal to ' + cube(5)
     ].join('\n\n');
     return element;
}

document.body.appendChild(component());
// let element = component();
// document.body.appendChild(component());

// if(module.hot){
//     module.hot.accept('./print.js',function(){
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component();
//         document.body.appendChild(element);
//     })
// }