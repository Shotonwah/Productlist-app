import { Image } from 'antd';
import { LuStar } from 'react-icons/lu';
import { useCart } from './CartContext';

function ProductCard({ product }) {
    const { addToCart } = useCart()
    const renderStar = (rating = 0) => {
        return Array.from({ length: 5 }, (__, index) => (
            <LuStar
                key={index}
                className={`w-5 h-5 transition-colors ${index < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
            />
        ));
    }

    return <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300">
        <div className="relative overflow-hidden">
            <Image
                src={product.image}
                alt={product.name}
                width="100%"
                height={256}
                style={{ objectFit: "cover" }}
                // className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500 cursor-zoom-in"
                preview={{
                    cover: (
                        <div className='text-white text-xs font-semibold bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm'>Click to View</div>
                    ),
                }}
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute top-4 left-4 bg-white/90 backdrop:blur-sm text-gray-700 
            px-3 py-1 rounded-full text-sm font-medium">{product.category}</span>
            </div>
        </div>
        <div className="p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
            <div className="flex items-center mb-4 gap-2 justify-between">
                <div className="flex items-center">{renderStar(product.rating)}</div>
                <span>{product.rating} ({product.review} reviews)</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <button className="group/btn bg-gray-300 text-gray-900 px-4 py-2 rounded-lg
            hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2
            cursor-pointer"
                    onClick={() => addToCart(product)}
                >
                    <span className="font-medium">Add to cart</span>
                </button>
            </div>
        </div>
    </div>
}

export default ProductCard;