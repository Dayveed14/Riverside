import AdminSidebar from "./AdminSidebar";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "../Admin.css";
import { useNavigate } from "react-router-dom";

function CreateProducts() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("quantity", quantity);

    fetch("http://159.65.21.42:9000/create/product", {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        alert("Product created");
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="main-content">
        <header className="adminHeader">
          <h1>Create Products</h1>
        </header>
        <main className="pdtBody">
          <div className="userForm">
            <form onSubmit={handleSubmit}>
              <h2>Create Product</h2>
              <div className="form-group">
                <label htmlFor="name">New Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">New Category:</label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">New Price:</label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  placeholder="Price"
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">New Quantity:</label>
                <input
                  type="text"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  placeholder="Quantity"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">New Description:</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">New Image:</label>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateProducts;
