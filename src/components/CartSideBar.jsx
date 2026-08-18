import { LuCreditCard, LuShoppingBag } from "react-icons/lu";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";


function CartSideBar({ isOpen, onClose }) {
    const { cartItems, clearCart, totalPrice } = useCart();

    return <>
        <div className={`bg-black/50 fixed inset-0 z-50 transition-all backdrop-blur-sm duratioon-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`} />
        <div className={`fixed top-0 bg-white h-full w-full max-w-md right-0 shadow-2xl
             transition-transform transform z-50 duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between p-6 border-b border-gray-200 overflow-hidden">
                <h2 className="flex items-center space-x-2 font-bold text-xl text-gray-900">
                    <LuShoppingBag className="w-5 h-5" />
                    <span>Shopping Cart</span>
                </h2>
                <button className="hover:shadow-md rounded-full p-4 hover:bg-gray-100 transition-colors duratioon-200">
                    <span className="text-lg font-bold w-6 h-6" onClick={onClose}>X</span>
                </button>
            </div>
            <div className="overflow-y-auto flex-1 p-6 bg-gray-50/30">
                {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                        <LuShoppingBag className="mb-4 mx-auto w-16 h-16 text-gray-300" />
                        <p className="text-gray-500 text-lg mb-2">Your carts is empty</p>
                        <p className="text-gray-400 text-sm">Add some products to get started</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
            <div className="border-t border-gray-300 p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg text-gray-500">Total</span>
                    <span className="text-lg text-gray-400">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex flex-col gap-3">
                    <button
                        disabled={cartItems.length === 0}
                        onClick={onClose}
                        className="w-full bg-violet-600 py-3 text-white font-medium rounded-lg cursor-pointer
                        flex items-center justify-center space-x-2 hover:scale-[1.02] duration-200 transition-all hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none shadow-md"
                    >
                        <LuCreditCard className="w-4 text-md" />
                        <span>Proceed to checkout</span>
                    </button>
                    <button
                        onClick={clearCart}
                        disabled={cartItems.length === 0}
                        className="w-full bg-gray-200 text-gray-700 py-3 font-semibold rounded-lg cursor-pointer
                        hover:scale-[1.02] duration-200 transition-all hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none">
                        <span>Clear Cart</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default CartSideBar;