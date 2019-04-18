function check(){

	const question1 = document.quiz.question1.value;
	const question2 = document.quiz.question2.value;
	const question3 = document.quiz.question3.value;
	const question4 = document.quiz.question4.value;
	const question5 = document.quiz.question5.value;
	const question6 = document.quiz.question6.value;
	const question7 = document.quiz.question7.value;
	const question8 = document.quiz.question8.value;
	const question9 = document.quiz.question9.value;
	const question10 = document.quiz.question10.value;
	let correct = 0;


	if (question1 == "Beach") {
		correct++;
}
	if (question2 == "goOut") {
		correct++;
}	
	if (question3 == "newThings") {
		correct++;
	}
	
	if (question4 == "up") {
		correct++;
	}

	if (question5 == "iced") {
		correct++;
	}
	if (question6 == "yes") {
		correct++;
	}
	if (question7 == "drive") {
		correct++;
	}
	if (question8 == "freq") {
		correct++;
	}
	if (question9 == "loud") {
		correct++;
	}
	if (question10 == "mingle") {
		correct++;
	}
	
	
	let score;
	

	if (correct <= 3) {
		score = 0;
		const $openBtn = $('#button');
	const $modal = $('#modal');
	const $closeBtn = $('#close');


		const button = () => {
		$modal.css('display', 'block')
		}
		const close = () => {
		$modal.hide(500)
}


		$openBtn.on('click', button);

		$closeBtn.on('click', close);

	}

	if (correct >= 4 && correct <= 5) {
		score = 1;
	}

	if (correct >= 6 && correct <= 8) {
		score = 2;
	}

	if (correct >= 9 && correct <= 10) {
		score = 3;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	// document.getElementById("message").innerHTML = messages[score];
	// document.getElementById("number_correct").innerHTML = 'Click below to see your results';
	}