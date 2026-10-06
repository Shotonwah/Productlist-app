import { LuShoppingCart, LuSearch, LuX } from "react-icons/lu";
import { useCart } from "./CartContext";
import { useState } from "react";

function Header({ onToggleCart, setSearchQuery }) {
    const { totalItemsCount } = useCart();
    const [searchInputValue, setSearchInputValue] = useState("");
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            setSearchQuery(searchInputValue.trim());
            setIsMobileSearchOpen(false);
        }
    }

    function handleInputChange(e) {
        const value = e.target.value;
        setSearchInputValue(value);
        if (value.trim() === "") {
            setSearchQuery("");
        }
    }

    return (
        <div className="bg-white shadow-lg backdrop-blur-md border-b border-gray-200/50 sticky top-0 py-2 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <div className={`flex items-center gap-1 ${isMobileSearchOpen ? "hidden sm:flex" : "flex"}`}>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">H.care</h2>
                    </div>

                    <div className={`flex-1 mx-4 sm:mx-8 md:mx-16 lg:mx-24 ${isMobileSearchOpen ? "flex" : "hidden sm:flex"}`}>
                        <div className="relative w-full flex items-center">
                            <input
                                type="text"
                                value={searchInputValue}
                                onKeyDown={handleKeyDown}
                                onChange={handleInputChange}
                                placeholder="Search Product..."
                                className="p-2 pl-4 pr-10 bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-md text-sm border border-gray-200"
                            />
                            {isMobileSearchOpen && (
                                <button
                                    className="absolute right-3 text-gray-500 sm:hidden"
                                    onClick={() => { setIsMobileSearchOpen(false); setSearchQuery(""); setSearchInputValue(""); }}
                                >
                                    <LuX className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {!isMobileSearchOpen && (
                            <button
                                className="sm:hidden p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                                onClick={() => setIsMobileSearchOpen(true)}
                            >
                                <LuSearch className="w-5 h-5" />
                            </button>
                        )}

                        <button
                            className={`relative bg-gray-100 text-gray-700 rounded-full hover:shadow-md p-2 hover:scale-105 transition-all duration-300 cursor-pointer ${isMobileSearchOpen ? "hidden xs:flex" : "flex"}`}
                            onClick={onToggleCart}
                        >
                            <LuShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                            {totalItemsCount > 0 && (
                                <span className="absolute w-5 h-5 sm:w-6 sm:h-6 -top-2 -right-1 bg-violet-500 text-white text-[10px] sm:text-xs font-semibold rounded-full flex items-center justify-center">
                                    {totalItemsCount}
                                </span>
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;
