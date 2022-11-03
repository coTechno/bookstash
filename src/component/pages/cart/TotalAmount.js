import React from 'react'
import "./Cart.css";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

function TotalAmount() {
    const cartList = useSelector((state) => state.cartList);
    const totalAmout = useSelector((state) => state.totalAmout);
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
        <div className='price-details-container'>
            <div className='heading'>PRICE DETAILS</div>
            <div className="price-details-list">
                {
                    cartList.map((item) => (
                        <div className="price-details-item">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    ))
                }
                <hr />
                <div className="price-details-item">
                    <p>Discount</p>
                    <span>FREE</span>
                </div>
                <div className="price-details-item">
                    <p>Total Amount</p>
                    <p>{totalAmout}</p>
                </div>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color='primary' sx={{fontSize: '16px', fontWeight: '600', lineHeight: '24px', letterSpacing: '1px'}}>PLACE ORDER</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default TotalAmount