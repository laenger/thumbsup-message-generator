const messages = ["why not", "looks good", "very nice!"];

export function generateMessage() {
	return messages[new Date().getTime() % messages.length];
}