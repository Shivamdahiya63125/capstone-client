import { React, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListingStyle.css";

const ProductListing = () => {
  const [allListing, setallListing] = useState();

  const fetchAllProducts = async () => {
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "GET",
    };
    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/listing/getalllisting`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.items);
        setallListing(data.items);
      });
  };

  useEffect(() => {
    //  getting all the products tp
    fetchAllProducts();
  }, []);

  return (
    <div className="product-listing-container">
      {/* <ProductCard item={allListing[0]}></ProductCard> */}
      {allListing
        ? allListing.map((item) => {
            return <ProductCard item={item}></ProductCard>;
          })
        : "no item fouund"}
    </div>
  );
};

export default ProductListing;
