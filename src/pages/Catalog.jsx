import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import Sidebar from "../components/sidebar";
import Description from "../components/DescriptionComponent";  // Import Description

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const { addToCart, cart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Get products for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Get the quantity of a product in the cart
  const getProductQuantity = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <div>
        <div className="relative flex">
        {/* Sidebar (Sticky) */}
        <div className="w-64 h-screen sticky top-0">
            <Sidebar />
        </div>

        {/* Catalog Section */}
        <div className="flex-1 p-6">
            {/* Breadcrumbs */}
            <nav className="mb-4">
            <span className="text-gray-600">Home &gt; </span>
            <span className="text-blue-500">Catalog</span>
            </nav>

            {/* Title with product count */}
            <h1 className="text-2xl font-bold flex items-center">
            Marble Sculpture Collection
            <span className="ml-4 text-sm text-gray-500">({products.length} products available)</span>
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-3 gap-6 mt-4">
            {displayedProducts.map((product) => (
                <div key={product.id} className="border p-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover"
                />
                <h2 className="text-xl">{product.name}</h2>
                <p>${product.price}</p>
                <p>In Cart: {getProductQuantity(product.id)}</p>
                <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 text-white p-2 mt-2"
                >
                    Add to Cart
                </button>
                </div>
            ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
            <button
                className={`px-4 py-2 border rounded-l ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <span className="px-4 py-2 border">{currentPage} / {totalPages}</span>
            <button
                className={`px-4 py-2 border rounded-r ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
            </div>
        </div>
        </div> 
        <div>
        <Description
            title="Arno Breker, Masterpiece Collection"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dolor. Ut aliquam sollicitudin leo. Cras iaculis ultricies nulla. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam eu nunc. Mauris quis arcu magna. Nulla facilisi.
"
            imageUrl="./images/arnobreker_bust.jpg"
          />
        </div>
    </div>
  );
};

export default Catalog;
