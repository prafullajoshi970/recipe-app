import {Routes,Route} from 'react-router-dom'
import Recipesearch from './components/Recipesearch';
import RecipeDetail from './components/RecipeDetail';
import FavouriteRecipe from './components/FavoriteRecipe'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Recipesearch></Recipesearch>}></Route>
        <Route path='/Detail/:id' element={ <RecipeDetail></RecipeDetail>}></Route>
        <Route path='/Favourite' element={<FavouriteRecipe></FavouriteRecipe>}></Route>
  
      </Routes>

    </div>
  );
}

export default App;
