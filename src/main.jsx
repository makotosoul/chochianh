import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				element:<Home />,
				index: true
			},
			{
				path: "about",
				element: <About />
			},
			{
				path: "contact",
				element: <Contact />
			},
		]
	}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
