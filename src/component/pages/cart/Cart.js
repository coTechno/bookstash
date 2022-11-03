import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./Cart.css";
import TotalAmount from "./TotalAmount";

function Cart(id, name, description, price, image) {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
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
  const [qty, setQty] = React.useState(1);

  const handleChange = (event) => {
    setQty(event.target.value);
  };
  return (
    <>
      {cartList.length !== 0 ? (
        <div className="cart-wrapper">
          <div className="cart-header">
            <h1>My Cart</h1>
          </div>
          <div className="cart-container">
            <div className="cart-list">
              {cartList.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-item-content">
                    <div className="content">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-desc">{item.description}</p>
                    <h3 className="cart-item-price">
                      $ {item.price}
                      <span className="cart-item-old-price">
                        {Math.round(item.price * 1.08 * 100) / 100}
                      </span>
                    </h3>
                    </div>
                    <ThemeProvider theme={theme}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "center",
                        padding: "0 8px 8px 0",
                        maxWidth: "290px",
                      }}
                    >
                      <Button
                        size="small"
                        sx={{
                          width: "93%",
                          margin: "8px",
                          height: "auto",
                          minHeight: "40px",
                        }}
                        color="primary"
                        variant="outlined"
                        onClick={() => {
                          dispatch({ type: "DELETE_FROM_CART_COUNT" });
                          dispatch({
                            type: "DELETE_FROM_CART_LIST",
                            payload: {
                              id: id,
                              name: name,
                              description: description,
                              price: price,
                              image: image,
                            },
                          });
                          dispatch({
                            type: "DELETE_FROM_TOTAL_AMOUNT",
                            payload: price,
                          });
                        }}
                      >
                        Delete
                      </Button>
                      <FormControl
                        sx={{
                          ml: 1,
                          minWidth: 120,
                          width: "93%",
                          marginTop: "8px",
                        }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small">Qty:</InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={qty}
                          label="Qty"
                          onChange={handleChange}
                        >
                          <MenuItem
                            sx={{ height: "10px", minHeight: "11px" }}
                            value=""
                          >
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                        </Select>
                      </FormControl>
                    </Card>
                  </ThemeProvider>
                  </div>
                </div>
              ))}
            </div>
            <TotalAmount />
          </div>
        </div>
      ) : (
        <div className="empty-cart-container">
          <div className="empty-cart">
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
              alt="Cart Is Empty!"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default Cart;
