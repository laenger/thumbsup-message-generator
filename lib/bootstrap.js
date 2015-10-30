import $ from 'jquery';

export function bootstrap() {
	// bootstrap code here
	
	$(() => {
		$('#generate').on('click', () => {
			$('#generated-result')
				.css('display', 'block')
				.text(':+1: why not');
		});
	});
}