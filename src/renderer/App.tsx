import { Provider } from 'react-redux';
import store from 'redux/store/store';
import Todos from './Components/Todos';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
