import React,{useEffect, useState} from 'react'
import FoodCard from '../Components/FoodCard'
import SearchBar from '../Components/SearchBar';

const Home = () => {
  

  const [recipes, setReceipes] = useState([]);
  const [search, setSearch] = useState("");  // 2. Search value state

    // Filter recipes based on first letter
  const filteredRecipes = recipes.filter((recipe) => {
    if (search === ""){
      return true; // search empty irundha ellam show pannum
    }else{
      return recipe.name.toLowerCase().startsWith(search.toLowerCase());
    }
  });

  useEffect(() => {
    const fetchData = async () => {
     try{
       const res = await fetch("https://dummyjson.com/recipes")
       const data = await res.json()
       setReceipes(data.recipes)
     }catch (error){
        console.log("There is Some Error...")
     }
    }
    fetchData();

  }, [])


  


  return (
    
     <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🍲 Welcome to Food Recipe App</h1>

       {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Recipes list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <FoodCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className=" text-4xl text-center col-span-3 text-red-500 font-bold">Food Not Found 😞</p>
        )}
      </div>
    </div>
  )
}

export default Home