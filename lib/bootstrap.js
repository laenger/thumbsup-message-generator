import $ from 'jquery';

export function bootstrap() {
	// bootstrap code here
	
	$(() => {
		$('#generate').on('click', () => {
			alert('generate!');
		});
	});
}