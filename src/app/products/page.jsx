import ProductCard from "@/components/ProductCard";


const ProductsPage = async () => {

    const res = await fetch('https://dummyjson.com/products/category/laptops')
    const products = await res.json()
    const allProducts = products.products


    console.log(allProducts);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Best Laptop</h2>

            <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
                {
                    allProducts.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>

        </div>
    );
};

export default ProductsPage;