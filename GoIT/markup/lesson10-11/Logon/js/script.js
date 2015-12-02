var names = [];
var currentName;

for (var i = 0; i < 5; i++) {
	names[i] = 	prompt('Введите ' + (i + 1) + ' имя:');
}

currentName = prompt('Введите имя пользователя:');

for (var i = 0; i < names.length; i++) {

	if (currentName == names[i]){

		alert(currentName + ', вы успешно вошли!');
		break;

	} else {

		alert('Пользователь не зарегистрирован');
		break;

	}
	 
}
