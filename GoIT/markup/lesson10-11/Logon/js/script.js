var names = [];
var currentName;
var checker;

for (var i = 0; i < 5; i++) {
	names[i] = 	prompt('Введите имя:',i + 1);
}

currentName = prompt('Введите имя пользователя:');

for (var i = 0; i < names.length; i++) {

	if (currentName == names[i]){

		checker = 1;
		break;

	} else {

		checker = 0;

	}
	 
};

// if (checker == 1) {
// 	alert(names[i] + ', вы успешно вошли!');
// } else {
// 	alert('Пользователь не зарегистрирован');
// };

(checker == 1) ? alert(names[i] + ', вы успешно вошли!') : alert('Пользователь не зарегистрирован');
