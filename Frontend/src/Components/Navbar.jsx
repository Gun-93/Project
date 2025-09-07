import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false); 
  const navigate = useNavigate();

  //get user info from localStorage
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
    setShowProfile(false);
  };
  return (
    <nav className="bg-gray-700 shadow md:sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-white  hover:text-blue-600">CityStyle</Link>

          {/*header*/}
          <div className="flex items-center space-x-6">
            <Link to="/products" className="text-white font-bold hover:text-blue-600">Products</Link>
            <Link to="/cart" className="text-white font-bold hover:text-blue-600">Cart</Link>

            {/*Show Login/Signup only when user is not logged in*/}
            {!user && (
              <>
                <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">Login</Link>
                <Link to="/signup" className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500 transition">SignUp</Link>
              </>
            )}

            {/*user profile*/}
            {user && (
              <div className="relative">
                <div
                  onClick={() => setShowProfile(!showProfile)}
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold cursor-pointer hover:bg-blue-700"
                  title="Profile">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>

                {/*Dropdown user Profile*/}
                {showProfile && (
                  <div className="absolute top-14 right-0 w-64 bg-white shadow-lg rounded-lg p-4">
                    <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <button
                      onClick={handleLogout}
                      className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div> 
        </div>
      </div> 
    </nav>
  );
}
export default Navbar;
