import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "./CartContext";
import { useState } from "react";

function Header({ onToggleCart, setSearchQuery }) {
    const { totalItemsCount } = useCart();
    const [searchInputValue, setSearchInputValue] = useState("")

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            setSearchQuery(searchInputValue.trim());
        }
    }
    function handleInputChange(e) {
        const value = e.target.value
        setSearchInputValue(value);
        if (value.trim() === "") {
            setSearchQuery("");
        }
    }
    return <>
        <div className="bg-white shadow-lg backdrop-blur-md border-b border-gray-200/50
    sticky top-0 py-2 z-40">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between h-6">
                    <div className="flex item-center gap-1">
                        <h2 className="text-2xl font-bold text-slate-300 tracking-tight text-gray-500">S.care</h2>
                    </div>
                    <div className="">
                        <input
                            type="text"
                            value={searchInputValue}
                            onKeyDown={handleKeyDown}
                            onChange={handleInputChange}
                            placeholder="Search Product"
                            className="p-2 bg-gray-300 w-xl sm:w-full lg:w-2xl flex items-center focus:outline-none focus:ring-2 rounded-md"
                        />
                    </div>
                    <button className="relative bg-gray-300 text-gray-700 rounded-full hover:shadow-lg transform p-2
                hover:scale-105 transition-all duration-300 cursor-pointer" onClick={onToggleCart}>
                        <LuShoppingCart className="w-6 h-6" />
                        {totalItemsCount > 0 && (
                            <span className="absolute w-6 h-6 -top-3 -right-1 bg-violet-500 text-white text-xs 
                    font-semibold rounded-full flex items-center justify-center">{totalItemsCount}</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Header;