import { El } from '@/library';
import { table, form,replaceEdit,a} from '@/Main';
import Header from './Header/Header';

const App = () => {
  console.log(a);
  const app = El({
    element: 'div',
    child: [Header(),table() ,form() ],
  });
 
  return app;
};
export default App;
