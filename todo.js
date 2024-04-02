let ToDo = []
let Completed = []

function add(title) {
	if(title === "") return -1

	const id = Math.floor(Math.random() * 10)
	const task = {
		id,
		'task': title
	}
	ToDo.push(task)
	return id
}

function remove(id) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			const idx = ToDo.indexOf(item)
			ToDo.splice(idx, idx+1)
		}
	})
	return result
}

function update(id, title) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			item.task = title
		}
	})
	return result
}

function markAsCompleted(id) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			const idx = ToDo.indexOf(item)
			const task = ToDo.splice(idx, idx+1)
			Completed.push(task)
		}
	})
	return result
}