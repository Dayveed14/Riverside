import { useEffect, useState } from "react";
import "../Admin.css";

function AdminContent() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);

  const countItemsInCart = () => {
    const cartData = sessionStorage.getItem("cart");
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      return parsedCart.length;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    fetch("http://159.65.21.42:9000/products")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((product) => {
          return product.category === "RIVERSIDE";
        });
        setProducts(filteredData);
        setTotalProducts(filteredData.length);
      });
    fetch("http://159.65.21.42:9000/users")
      .then((response) => response.json())
      .then((data) => {
        setTotalUsers(data.length);
      });
  }, []);

  return (
    <div className="dashboard-content">
      {/* Add content for the dashboard */}
      <h2>Dashboard</h2>
      <div className="inner-content">
        <div className="card">
          <h2>Total Users</h2>
          <p>{totalUsers}</p>
        </div>
        <div className="card">
          <h2>Total Products</h2>
          <p>{totalProducts}</p>
        </div>
        <div className="card">
          <h2>Total Cart Items</h2>
          <p>{countItemsInCart()}</p>
        </div>
      </div>

      <h2>Product Table</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>₦{product.price}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminContent;
