import React from "react";
import NavigationBar from "./Navbar";


const About = () => {


    return (
    <>
    <div >
    <NavigationBar />
    
    <div style={{ marginLeft: '100px', marginTop: '100px'}} >

        <h1> About Estore</h1>
        <p className="lead">Welcome to our ecommerce clothing store, your one-stop destination for all your fashion needs. We strive to provide a seamless online shopping experience where you can discover the latest trends, explore a wide range of clothing options, and find the perfect pieces to express your unique style.</p>
        <br />
        
        <h1>About Contact Manager</h1>
        <p >Noor Ul Ain</p>
        <p >Send your queries at: </p>
        <p >noorulainarshad144@yahoo.com</p>
    </div>
    </div>
    </>
    );

}
export default About;