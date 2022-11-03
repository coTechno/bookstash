import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

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
const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: translateY(-5px);
  }
  `}
`;
const productImage = {
  padding: "12px 40px",
  minHeight: "190px",
  maxHeight: "190px",
};
function ProductCard({ id, name, description, price, image, rating }) {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <StyledCard>
        <Card
          sx={{
            margin: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height: "310px",
            width: "214px",
          }}
        >
          <Link
            to={`/product/${id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <CardMedia
              key={id}
              component="img"
              style={productImage}
              image={image}
              alt="productImg"
            />

            <CardContent
              style={{
                padding: "0px 16px",
                marginBottom: "-10px",
                marginTop: "-8px",
              }}
            >
              <Typography
                gutterBottom
                style={{ fontSize: "16px" }}
                variant="h5"
                component="div"
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "12px" }}
                color="text.secondary"
              >
                {description}
              </Typography>
              <Typography
                gutterBottom
                style={{ fontSize: "16px" }}
                variant="h5"
                component="div"
              >
                $ {price}
              </Typography>
            </CardContent>
          </Link>
          <Card
            style={{
              flexDirection: "column",
              display: "flex",
              alignItem: "center",
              padding: "8px",
            }}
          >
            <Stack spacing={1} sx={{ marginBottom: "2px" }}>
              <Rating name="size-small" defaultValue={rating} size="small" />
            </Stack>
            <Button
              size="small"
              style={{ width: "100%" }}
              color="primary"
              variant="contained"
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
                dispatch({
                  type: "ADD_TO_TOTAL_AMOUNT",
                  payload: price,
                });
              }}
            >
              Add to cart
            </Button>
          </Card>
        </Card>
      </StyledCard>
    </ThemeProvider>
  );
}

export default ProductCard;
