import React from "react";

const Home = () => {
	return(
		<div className="container">
			<h1>To Do List</h1>
			<ul>
				<li><input type="text" placeholder="Insert your task"></input></li>
				<li>Take breakfast <i class="fas fa-tash-alt"></i></li>
				<li>Feed my dog <i className="fas fa-tash-alt"></i></li>
				<li>Drive to work <i className="fas fa-tash-alt"></i></li>
				<li>Sleep in my bed <i className="fas fa-tash-alt"></i></li>
			</ul>
			<div>23 task</div>
		</div>
	);
};

export default Home;

