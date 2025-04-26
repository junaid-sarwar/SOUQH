import { useState, useEffect } from "react";
import productData from "../../data/dummyProducts.json";
import toast from 'react-hot-toast';

const UpdateProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: ""
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    // Load products from the dummy JSON file
    setProducts(productData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const newProductData = {
        ...newProduct,
        id: products.length + 1,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock)
      };
      setProducts([...products, newProductData]);
      setNewProduct({ name: "", description: "", price: "", stock: "" });
      toast.success("Product added successfully!");
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    toast.success("Product deleted successfully!");
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock
    });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    if (editingProduct) {
      const updatedProducts = products.map((product) =>
        product.id === editingProduct.id ? { ...product, ...newProduct } : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
      setNewProduct({ name: "", description: "", price: "", stock: "" });
      toast.success("Product updated successfully!");
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Manage Products</h1>
      
      {/* Product Form */}
      <form
        onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
        className="bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl mb-4">{editingProduct ? "Edit Product" : "Add New Product"}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Stock</label>
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded w-full hover:bg-indigo-700"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="text-sm text-gray-500">Price: ${product.price}</p>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
