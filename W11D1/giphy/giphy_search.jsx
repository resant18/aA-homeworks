import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Comment this out after move the fetchSearchGiphys from 
// APiUtil to thunk action creator in giphys_action.js
//import { fetchSearchGiphys } from './util/api_util';
import { receiveSearchGiphys, fetchSearchGiphys } from  './actions/giphy_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.fetchSearchGiphys = fetchSearchGiphys;
    window.receiveSearchGiphys = receiveSearchGiphys;
    window.store = store;

    ReactDOM.render(<Root store={store} />, document.getElementById("root"));
})


// store.getState();
// //should return the initial state object, including the empty giphys array

// Using this pattern in our components would make our app difficult to maintain -- 
// each change to our app state should come from an action creator.
// const fetchSuccess = giphys => store.dispatch(receiveSearchGiphys(giphys))
// fetchSearchGiphys("puppies").then(fetchSuccess);

// store.getState();
// // should return the app state populated with puppy giphys