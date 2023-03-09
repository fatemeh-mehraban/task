import './style.css';
import App from './src/App';
import {render , infoArr} from './src/Main'

const root = document.getElementById('app');
root.appendChild(App());
render(infoArr)
