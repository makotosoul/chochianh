import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import "./index.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import "./App.css";
function App() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<BrowserRouter>
		{/*copy and paste from the mui document *from here**/}
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
		<MenuIcon/>
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
		{/**to here**/}
		{/*adding component link and the /endpoint*/}
				<MenuItem onClick={handleClose} component={Link} to="/">
					Home
				</MenuItem>
				<MenuItem onClick={handleClose} component={Link} to="/contact">
					Contact
				</MenuItem>
				<MenuItem onClick={handleClose} component={Link} to="/about">
					About
				</MenuItem>
			</Menu>
		{/*making routing path for the link*/}
			<Routes>
				<Route path="/" exact Component={Home} />
				<Route path="/contact" exact Component={Contact} />
				<Route path="/about" exact Component={About} />
				<Route Component={Error} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
