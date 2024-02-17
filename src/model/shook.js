const reaction_list = [
    "omfg I just fell down Mount Everest and jumped off a cliff into the Mediterranean sea.",
    "I want to be the chair",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam libero ipsum,\n" +
    "rutrum ut ante sit amet, pellentesque faucibus felis. In et sapien ante. Aenean\n" +
    "rutrum convallis scelerisque. Duis facilisis velit et augue rutrum, nec facilisis\n" + 
    "orci tempus. Nulla id magna nisi. Vestibulum sodales, magna id hendrerit pulvinar,\n" +
    "urna felis imperdiet nunc, ac tincidunt est felis ac eros. Nullam eu sapien\n" +
    "nec ipsum aliquam volutpat. Suspendisse ultrices, enim lobortis porttitor porttitor,\n" +
    "leo justo tempor neque, quis congue mi mauris quis turpis. Quisque iaculis\n" +
    "ex a nibh dapibus, in imperdiet nibh ornare. Nulla vehicula gravida eros eget pharetra.",
    "skjdfghslfjdh",
    "OMFG I CAN'T BELIEVE YOU ACTUALLY SAW HER SHAKING CRYING FALLING ON THE FLOOR SCREAMING BURNING THE HOUSE DOWN DYING OF SHOCK.",
];

function addCowSay(message) {
    const MAX_WIDTH = 30;
    const cow = `
                \\   ^__^
                \\   (oo)\\_______
                    (__)\\       )\\/\\
                        ||----w |
                        ||     ||
    `

    
    let formatted_message = "";
    message = message.replace(/\n/g, " "); // Remove new lines as they break cowsay
    // Message is only one line long
    if (message.length < MAX_WIDTH) {
        formatted_message = "_".repeat(message.length + 3) + "\n< " + message + " >\n" + "-".repeat(message.length + 3);
        return formatted_message + "\n" + cow;
    } 

    // Split the message into chunks of length 30 or less and then join them with a new line.
    for (let i = 0; i < message.length; i += MAX_WIDTH) {
        const message_block = message.slice(i, i + MAX_WIDTH);
        if (i == 0) {
            // Start of the message
            formatted_message += "/ " + message_block + " \\\n"
        } else if (message.length <= i + MAX_WIDTH) {
            // End of the message
            formatted_message += "\\ " + message_block.padEnd(MAX_WIDTH) + " /";
        } else {
            // Middle of the message
            formatted_message += "| " + message_block + " |\n";
        }
        
    }

    formatted_message = "_".repeat(MAX_WIDTH + 3) + "\n" + formatted_message + "\n" + "-".repeat(MAX_WIDTH + 3);
    return formatted_message + "\n" + cow;
}

/**
 * @param input String text that the user inputted, what I should react too but currently am not doing.
 * @param useCowsay if True put the response inside the linux cowsay speech bubble.
 */
function generateResponse(input, useCowsay) {
    const response_index = Math.floor(Math.random() * reaction_list.length);
    let response = reaction_list[response_index];
    if (useCowsay) {
        response = addCowSay(response);
    }
    return response;
}


export { generateResponse };
