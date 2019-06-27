import React from 'react';
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Pages from './pages';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
