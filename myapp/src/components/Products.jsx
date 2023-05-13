import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";



const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button className="btn btn-outline-dark" onClick={()=> setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark" onClick={()=> filterProduct("women's clothing")}>Women Clothing</button>
                    <button className="btn btn-outline-dark" onClick={()=> filterProduct("men's clothing")}>Men Clothing</button>
                    <button className="btn btn-outline-dark"onClick={()=> filterProduct("jewelery")}>Jewelery</button>
                    <hr />
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" 
                                                    alt={product.title} height="250px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title}</h5>
                                            <p class="card-text">{product.description}
                                            </p>
                                            <p class="card-text">${product.price}
                                            </p>

                                            <NavLink key={product.id} to={`/product/${product.id}`}>
                                                View
                                                </NavLink>
                                        </div>
                                </div>


                            </div>
                        </>

                    )

                })}

            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row1">
                    <div className="col-12 mb-5">
                        <h1 className="display -6 fw-bolder text-center">Latest products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    );
}

export default Products;