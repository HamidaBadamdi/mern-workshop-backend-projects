import React from "react";
import axios from "axios";
import './App.css';


function Display(){
    const [mydata , setData] = React.useState([]);
    React.useEffect(() =>{

        axios.get("http://127.0.0.1:4000/getdata")
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => alert(err))
    }, [])
return (
    <>
        {/* Header */}
        <div className="header">
            <div className="logo">E-Shop</div>

            <div className="search-box">
                <input type="text" placeholder="Search products..." />
            </div>

            <div className="cart">🛒 Cart</div>
        </div>

        {/* Products */}
        <div className="container">
            <div className="product-grid">
                {mydata
                 .filter(item => item.pname && item.pprice && item.pdetails)
                .map((value, index) => (
                    <div className="product-card" key={index}>
                       

                        <div className="product-content">
                            <div className="product-title">
                                {value.pname}
                            </div>

                            <div className="product-price">
                                ${value.pprice}
                            </div>

                            <div className="product-desc">
                                {value.pdetails}
                            </div>

                            <button className="buy-btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
);

}export default Display;
