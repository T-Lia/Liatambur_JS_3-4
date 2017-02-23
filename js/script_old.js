var obj = {
	newHTML: createHTML	
};

obj.newHTML();

function createHTML () {

	var wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	document.body.appendChild(wrapper);	


	var header = document.createElement('h3');
	header.classList.add('text-center');
	header.innerHTML = 'Тест по программированию';
	wrapper.appendChild(header);


	for ( var i = 1; i < 4; i++) {
		var divQues = document.createElement('div');
		divQues.classList.add('divQues');
		wrapper.appendChild(divQues);


		var question = document.createElement('p');
		question.innerHTML = i +'. Вопрос №' + i;	
		divQues.appendChild(question);		


		for (var j = 1; j < 4; j++) {
			var chBoxContainer = document.createElement('div');
			chBoxContainer.classList.add('chBoxContainer');
			divQues.appendChild(chBoxContainer);			

			var id = 'choice_' + i + '_' + j;

			var checkbox = document.createElement('input');		
			chBoxContainer.appendChild(checkbox);
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('id', id);		

			var answer = document.createElement('label');
			answer.innerHTML = 'Вариант ответа №' + j;		
			chBoxContainer.appendChild(answer);
			answer.setAttribute('for', id);
		}
	}	

	var button = document.createElement('button');
	button.innerHTML = 'Проверить мои результаты';
	wrapper.appendChild(button);
	button.setAttribute('type', 'button');
	button.classList.add('btn');
	button.classList.add('btn-default');	
}

