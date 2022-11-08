let todoInput // miejsce, gdzie uzytkownik wpisuje tresc zadania
let errorInfo // info o brtaku zadan. koniecznosci wpisania tesktu
let addBtn // przydcisk ADD - dodaje nowe elementy do listy
let ulList // lista zadan, tagi UL
let newTodo // nowo dodane zadanie

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	// pobieramy wszystkie elementy
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
	// nadajemy nasluchiwanie
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
        createToolsArea()
		ulList.append(newTodo)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Musisz wpisać jakieś zadanie!'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
}


document.addEventListener('DOMContentLoaded', main)
// zabezpiecza przed wczytaniem się skryptów zanim cała strona nie zostanie załadowana
