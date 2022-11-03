import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#eb0014",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const cartCount = useSelector((state) => state.cartCount);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", textTransform: "uppercase", width: '240px', height: '100vh', backgroundColor: '#388e3c' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" style={{ textDecoration: "none", color: "#000", }}>
          BookStash
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item} style={{ textDecoration: "none" }}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center", color: "#000" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ThemeProvider theme={theme}>
          <Link to="/cart">
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon sx={{ color: "#000" }} />
            </Badge>
          </Link>
        </ThemeProvider>
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ height: "65px", display: "flex" }}>
      <AppBar component="nav" style={{ backgroundColor: "#0f161d" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Exo 2",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link
              to="/"
              style={{
                padding: "0 24px",
                color: "white",
                textDecoration: "none",
              }}
            >
              BookStash
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item} style={{ textDecoration: "none" }}>
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              </Link>
            ))}

            <ThemeProvider theme={theme}>
              <Link to="/cart">
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingCartIcon sx={{ ml: 2, color: "#fff" }} />
                </Badge>
              </Link>
            </ThemeProvider>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
