import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";



function ProductDetails(name, description, price, image) {
  const productList = useSelector((state) => state.productList1);

  const dispatch = useDispatch();
  const { id } = useParams();
  let productDetail = {};

  for (let i = 0; i < productList.length; i++) {
    if (productList[i].id == id) {// eslint-disable-line eqeqeq
      productDetail = productList[i];
    }
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: "#388e3c",
      },
      secondary: {
        main: "#eb0014",
      },
    },
  });

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={productDetail.image} alt={productDetail.name} />
      </div>
      <div className="product-detail-info">
        <h2>{productDetail.name}</h2>
        <p>{productDetail.description}</p>
        <p className="about">{productDetail.about}</p>
        <p className="product-detail-price">
          <strong>Price: </strong>
          <span className="product-detail-new-price">
            $ {productDetail.price}
          </span>
          <span className="product-detail-old-price">
            {Math.round(productDetail.price * 1.08 * 100) / 100}
          </span>
        </p>
        <ThemeProvider theme={theme}>
          <Card
            style={{
              flexDirection: "column",
              display: "flex",
              alignItem: "center",
              padding: "8px",
              maxWidth: '290px'
            }}
          >
            <Button
              size="small"
              style={{ width: "100%" }}
              color="primary"
              variant="outlined"
              onClick={() => {
                dispatch({ type: "ADD_TO_CART_COUNT" });
                dispatch({
                  type: "ADD_TO_CART_LIST",
                  payload: {
                    id: id,
                    name: name,
                    description: description,
                    price: price,
                    image: image,
                  },
                });
              }}
            >
              Add to cart
            </Button>
            <Button
              size="small"
              style={{ width: "100%", marginTop: "8px" }}
              color="primary"
              variant="contained"
            >
              Buy now
            </Button>
          </Card>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ProductDetails;
