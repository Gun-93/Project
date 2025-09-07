import { useCart } from "../Components/CartContext";
import { useNavigate } from "react-router-dom";
function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20230519/original/pngtree-store-with-hanging-clothing-in-a-high-end-environment-picture-image_2654941.jpg")`,
      }}>
      <div className="absolute inset-0 bg-black/1 backdrop-blur-sm"></div>
     
     {/*Content*/}
      <div className="relative max-w-3xl mx-auto p-6 bg-white/80 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>₹{item.price * item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Remove
                </button>
              </div>
            ))}
            <h3 className="mt-4 font-bold text-lg">Total: ₹{totalPrice}</h3>
            {/*Add Item button*/}
            <button
              onClick={() => navigate("/products")}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">+Add Item
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default CartPage;








