import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';


const giphysReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      // here we just want to return the data retrieved from 
      // ajax call and doesn't merge to state
      return action.giphys;
    default:
      return state;
  }
};

export default giphysReducer;