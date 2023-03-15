import { El } from '@/library';
import Header from './Header/Header';
import {loading} from './loading/index'
import { table, form,replaceEdit} from '@/Main';


// import{x} from '@/renderjson'

const App = () => {
  const app = El({
    element: 'div',
    child: [Header(),table() ,form(),loading()],
  });
 
  return app;
};
export default App;
