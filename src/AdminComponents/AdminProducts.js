import AdminSidebar from "./AdminSidebar";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import { Link, useNavigate } from "react-router-dom";

function AdminProducts() {
  const tableRef = useRef(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://159.65.21.42:9000/products")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((product) => {
          return product.category === "RIVERSIDE";
        });
        setProducts(filteredData);
        $(tableRef.current).DataTable({
          paging: true,
          pageLength: 10,
          searching: true,
          responsive: true,
        });
      })
      .catch((error) => {
        console.error("Error fetching Products:", error);
      });
  }, []);
  const handleDelete = (productId) => {
    fetch(`http://159.65.21.42:9000/product/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Deleted");
        navigate("/admin");
      });
  };
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="main-content">
        <header className="adminHeader">
          <h1>Products</h1>
        </header>
        <main>
          <table ref={tableRef}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Link
                      className="edit-button"
                      to={`/editproduct/${product._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default AdminProducts;
