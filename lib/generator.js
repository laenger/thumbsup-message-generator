const messages = [
	"[random doge message]",
	"why not", 
	"looks good", 
	"very nice!"
];

const dogeMessages = [
	"such cool",
	"much wow",
	"such awesome",
	"much awesome",
	"much wow",
	"very wow"
];

export function generateMessage() {
	let index = new Date().getTime() % messages.length;
	if (index === 0) {
		let start = dogeMessages[Math.floor((Math.random() * dogeMessages.length))];
		let end = dogeMessages[Math.floor((Math.random() * dogeMessages.length))];
		return `${start}, ${end}`;
	} else {
		return messages[new Date().getTime() % messages.length];	
	}
}