import {useEffect} from 'react'
import { Discover } from './components/Discover';
import { Reducer } from './customhook/Reducer';
import { Search } from './components/Search';
import { Rating } from './components/Rating';


const App = () => {
  const [state, dispatch] = Reducer()

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=95fdaefd2a8a510553234065950ae4f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    .then(data => data.json())
    .then(response => {
      dispatch({type: "GET_MOVIES", payload: response.results})
    })
  }, [])


  return (
    <div>
      <Search dispatch={dispatch}/>
      <Rating dispatch={dispatch}/>
      <Discover movies={state.showResults}/>
    </div>
  );
}

export default App;
