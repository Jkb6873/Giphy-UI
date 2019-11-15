import React from 'react';
import TopHat from './TopHat';
import GiphyBody from './GiphyBody';
import GiphyFavs from './GiphyFavs';
import GifModal from './GifModal';
import { rootReducer } from '../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  return (
    <Provider store={store}>
      <Router>
        <TopHat/>
        <GifModal/>
        <Switch>
          <Route path="/" exact component={GiphyBody} />
          <Route path="/favs" component={GiphyFavs} />
        </Switch>
      </Router>
    </Provider>
  );
}
