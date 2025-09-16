import { Link } from "react-router-dom"

const FoodCard = ({ recipe }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.name}</h2>
        <p className="text-gray-600 text-sm">⏱️ {recipe.cookTimeMinutes} mins</p>
        <p className="text-gray-600 text-sm">⭐ {recipe.rating}</p>
        <Link
          to={`/FoodDetails/${recipe.id}`}
          className="inline-block mt-3 bg-orange-500 text-white px-4 py-2 rounded-4xl hover:bg-orange-600"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default FoodCard
