import './style.css';
import App from './src/App';
import {render, getInfo} from './src/Main'
const root = document.getElementById('app');
root.appendChild(App());
const data = getInfo()
data.then(res=>render(res))
console.log(20);

