const messages = [
		"why not",
		"looks good",
		"very nice!",
		"awesome",
		"looks about right",
		"sick!",
		"exactly what we need",
		"even better than i thought",
		"uber",
		"speechless",
		"nice",
		"cool",
		"flawless",
		"damn pretty",
		":)",
		"o.O",
		"¯\_(ツ)_/¯"
];

export function generateMessage() {
	return messages[new Date().getTime() % messages.length];
}
