import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home.js';
import { Login } from './pages/Login/Login';

export const App = () => {
	const token = window.localStorage.getItem('user_token');

	// return (
	// 	<>
	// 		<Routes>
	// 			<Route path="/*" element={token ? <Home /> : <Login />} />
	// 		</Routes>
	// 		{/* <Login /> */}
	// 		{/* <Home /> */}
	// 	</>
	// );

	return <Home />;
};
