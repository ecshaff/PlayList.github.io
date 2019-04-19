const $openBtn = $('#generate');
const $modal = $('#modal');
const $closeBtn = $('.close');


const generate = () => {
	$modal.css('display', 'block')
}
const close = () => {
	$modal.hide(500)
}


$openBtn.on('click', generate);

$closeBtn.on('click', close);


const $openBtn1 = $('#generate1');
const $modal1 = $('#modal1');
const $closeBtn1 = $('#close1');


const generate1 = () => {
	$modal1.css('display', 'block')
}
const close1 = () => {
	$modal1.hide(500)
}


$openBtn1.on('click', generate1);

$closeBtn1.on('click', close1);

const $openBtn2 = $('#generate2');
const $modal2 = $('#modal2');
const $closeBtn2 = $('#close2');


const generate2 = () => {
	$modal2.show()
}
const close2 = () => {
	$modal2.hide(500)
}


$openBtn2.on('click', generate2);

$closeBtn2.on('click', close2);






















