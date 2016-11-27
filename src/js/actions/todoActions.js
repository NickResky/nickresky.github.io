export function fetchTodos() {
	return {
		type: "FETCH_TODOS",
		payload: [
			{
				id: 113464613,
				text: "Go Shopping",
				complete: false
			},
			{
				id: 235684679,
				text: "Pay Water Bill",
				complete: false
			}
		]
	}
};

export function createTodo(text) {
	return {
		type: "ADD_TODO",
		payload: {
			id: 124567899,
			text: text,
			complete: false
		}
	}
};

export function deleteTodo(id) {
	return {
		type: "DELETE_TODO",
		payload: id
	}
}
