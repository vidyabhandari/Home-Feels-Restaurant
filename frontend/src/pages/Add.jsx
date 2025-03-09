import React from "react";
import upload from "../assets/upload.png";
import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";
import "../css/Add.css";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";


const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", Number(data.category));
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      alert("Added successfully!");
    } else {
      setImage(false);
    }
  };

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  return (
    <div>
      <AdminNavbar />
      <hr />
      <div className="app-content">
        <AdminSidebar />
        <div className="add">
          <form className="flex-col" onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
              <p>Ulpoad image</p>
              <label htmlFor="image">
                <img
                  src={image ? URL.createObjectURL(image) : upload}
                  alt="Add image"
                  className=""
                />
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                name="image"
                id="image"
                hidden
                required
              />
            </div>
            <div className="add-product-name flex-col">
              <p>Product name</p>
              <input
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                name="name"
                id="name"
                placeholder="Type Here"
              />
            </div>
            <div className="add-product-description flex-col">
              <p>Product Descrpition</p>
              <textarea
                onChange={onChangeHandler}
                value={data.description}
                name="description"
                id="decription"
                rows="6"
                placeholder="Write content here"
                required
              ></textarea>
            </div>
            <div className="add-category-price">
              <div className="add-category flex-col">
                <p>Product Category</p>
                <select
                  onChange={onChangeHandler}
                  //   value={data.category}
                  name="category"
                >
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>
                </select>
              </div>
              <div className="add-price flex-col">
                <p>Product price</p>
                <input
                  onChange={onChangeHandler}
                  value={data.price}
                  type="Number"
                  name="price"
                  placeholder="Rs20"
                />
              </div>
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
