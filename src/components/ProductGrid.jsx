import ProductCard from "./ProductCard";
import { products } from '../data/products'

function ProductGrid({ searchQuery }) {
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return <>
        <div className="py-8">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Featured Products</h2>
                    <p className="text-lg text-gray-600">Discover our exclusive ranges of products designed to enhance your Skincare.</p>
                </div>
                {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-500 py-12 text-xl">
                        Product is not Available
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })}
                    </div>
                )}
            </div>
        </div>
    </>
}

export default ProductGrid;