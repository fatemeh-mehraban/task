import { El } from '@/library';
import { table, form } from '@/Main';
import Header from './Header/Header';

const App = () => {
  const app = El({
    element: 'div',
    id:'uifirst',
    child: [Header(),table() ,form() ],
  });

  return app;
};
export default App;
