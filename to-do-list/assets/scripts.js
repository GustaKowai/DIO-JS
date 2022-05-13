const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');//pega o elemento digirado no form imput
	addTask(inputField.value);//roda a função add task para colocar o elemento na lista
	form.reset();//limpa o campo formulário para poder digitar uma nova tarefa
};

function addTask(description) {
	const taskContainer = document.createElement('div'); //cria uma nova div para a nova tarefa
	const newTask = document.createElement('input'); // cria um novo elemento input na lista
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);// adiciona um text node com o texto digitado no campo

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description); //adiciona o nome da tarefa como o texto digitado no campo
	newTask.setAttribute('id', description); // adiciona a id da tarega como o texto digitado no campo

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask); //adiciona a nova tarefa na lista
	taskContainer.appendChild(taskLabel); //adiciona o nome da nova tarefa na lista

	taskList.appendChild(taskContainer);
}