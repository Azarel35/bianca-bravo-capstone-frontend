import React from 'react';

import Home from '../pages/home';

export default function Logout(props) {
	sessionStorage.clear();
	return (
		<div className="wrapper-home">
			<Home></Home>
		</div>
	);
}
