import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItems = prevItems.find((item) => item.id === product.id);
            if (existingItems) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }]
        })
    };
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === productId);
            if (existingItem.quantity === 1) {
                return prevItems.filter((item) => item.id !== productId);
            }
            return prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };
    const deleteFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };
    const clearCart = () => setCartItems([]);
    const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <CartContext.Provider value={{
            cartItems, addToCart, removeFromCart, deleteFromCart, clearCart, totalItemsCount, totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );

};
export const useCart = () => useContext(CartContext);