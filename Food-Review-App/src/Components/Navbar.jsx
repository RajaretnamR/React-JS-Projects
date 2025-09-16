import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold">
        <Link to="/">🍴 Food Recipe App</Link>
      </h1>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-200">Home</Link>
        <Link to="/about" className="hover:text-yellow-200">About</Link>
      </div>
    </nav>
  )
}

export default Navbar