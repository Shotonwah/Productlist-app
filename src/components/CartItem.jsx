import { LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";
import { useCart } from "./CartContext";

function CartItem({ item }) {
    const { addToCart, removeFromCart, deleteFromCart } = useCart();
    return (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm transition-all duration-200 gap-4">
             <div className="flex items-center space-x-4 flex-1">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg bg-gray-50 border border-gray-100"
                />
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm truncate mb-0.5">{item.name}</h4>
                    <p className="text-xs text-gray-400 capitalize mb-2">{item.category || "Skincare"}</p>
                    <p className="text-sm font-bold text-violet-600">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>

            <div className="flex flex-col items-end gap-3 justify-between h-20">
                <button 
                    onClick={() => deleteFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors duration-150 cursor-pointer"
                    title="Remove item"
                >
                    <LuTrash2 className="w-5 h-5" />
                </button>
                <div className="flex items-center border border-gray-200 rounded-lg p-1 bg-gray-50/50 shadow-inner">
                    <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-gray-500 hover:text-violet-600 hover:bg-white rounded transition-all cursor-pointer">
                        <LuMinus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2.5 text-xs font-bold text-gray-700 min-w-6 text-center select-none">
                        {item.quantity}
                    </span>
                    <button 
                        onClick={() => addToCart(item)}
                        className="p-1 text-gray-500 hover:text-violet-600 hover:bg-white rounded transition-all cursor-pointer">
                        <LuPlus className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div> 
        </div>
    );
}
export default CartItem;
