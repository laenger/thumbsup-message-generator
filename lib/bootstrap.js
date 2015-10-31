import $ from 'jquery';
import { generateMessage } from './generator.js';

export function bootstrap() {
	// bootstrap code here
	
	$(() => {
		$('#generate').on('click', () => {
			let message = generateMessage();
			
			$('#generated-result')
				.css('display', 'block')
				.text(`:+1: ${message}`);
		});
	});
}