import React, {useState} from "react";

const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState([])

	function nuevaTarea (e) {
		e.preventDefault()
		setLista ([...lista, tarea])
		setTarea ("")
	}
	
	function eliminar(id){
		let tareaNueva = []
		tareaNueva = lista.filter((tarea, index) => {
			if (index !== id){
				return tarea
			}
		})
		setLista (tareaNueva)
	}
	return(
		<div className="container">
			<h1>To Do List</h1>
			<input type="text" 
			placeholder="Insert your task" 
			value = {tarea} 
			onChange={(e) => setTarea(e.target.value)}>
			</input>
			<button onClick={nuevaTarea}>Agregar Tarea</button>
			<ul>
				{lista.map((tarea,id) => (
				<li key={id}>{tarea} 
				<button onClick={() => eliminar (id)}>
				<i class="fa fa-trash"></i>
				</button>
				</li>
				))}
			</ul>
		</div>
	);
};

export default Home;

