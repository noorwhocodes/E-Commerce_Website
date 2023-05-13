import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavigationBar from "./Navbar";

const Product = () => {

    const { id } = useParams();
    const navigate = useNavigate(); // Add useNavigate hook
    console.log(id);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }
    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const itemInCart = cartItems.find((item) => item.id === product.id);
    
        if (itemInCart) {
          itemInCart.quantity += 1;
        } else {
          const newItem = { ...product, quantity: 1 };
          cartItems.push(newItem);
        }
    
        localStorage.setItem('cart', JSON.stringify(cartItems));
      };

    const ShowProduct = () => {
        return (
            <>

                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} height="450px" width="450px" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-black-50">
                            {product.category}
                        </h4>
                        <h1 className="text-uppercase text-black-50">{product.title}</h1>
                        <p className="lead fw-border">
                            <i className="fas fa-star"></i>
                        </p>
                        <h5 className=" text-10">
                            {product.description}
                        </h5>
                        <p className="lead card-title mb-0">
                            ${product.price}
                        </p>
                        <button className="btn btn-outline-dark" onClick={handleAddToCart}> Add to cart</button>
                        <NavLink to="/cart" className="btn btn-outline-dark" > Go to cart</NavLink>
                    </div>
                </div>




            </>
        )
    }


    return (
        <div className="page-container">
             <NavigationBar />
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
           
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </div>
    )


}


export default Product;