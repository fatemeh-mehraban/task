import './style.css';
import App from './src/App';
import {showLoading,hiddenLoading} from './src/loading'
import {render, getInfo} from './src/Main'
const root = document.getElementById('app');
root.appendChild(App());
showLoading()
const data = getInfo()
data.then(res=>{render(res)
    hiddenLoading()
})

