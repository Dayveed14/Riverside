import AdminSidebar from "./AdminSidebar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    
    fetch(`http://159.65.21.42:9000/product/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setCategory(data.category);
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setQuantity(data.quantity);
      });
  }, [productId]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("quantity", quantity);

    fetch(`http://159.65.21.42:9000/product/update/${productId}`, {
      method: "PUT",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        alert("Product updated");
        navigate("/adminproducts"); 
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
          <h1>Edit Products</h1>
        </header>
        <main>
          <div className="pdtBody">
            {product ? (
              <div className="userForm">
                <form onSubmit={handleSubmit}>
                  <h2>Edit Product</h2>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input
                      type="text"
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price:</label>
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
                    <label htmlFor="quantity">Quantity:</label>
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
                    <label htmlFor="description">Description:</label>
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
                    <label htmlFor="image">Image:</label>
                    <input
                      type="file"
                      id="image"
                      onChange={(e) => setImage(e.target.files[0])}
                      accept="image/*"
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditProduct;
