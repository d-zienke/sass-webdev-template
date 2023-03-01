function createMessage (type) {
    
    // restrict `type` attribute to accept only predefined values
    if (!(type === 'success' || type === 'error' || type === 'warning')) {
        throw new Error(`Invalid message type: ${type}`);
    }

    return (message, appendTo, displayTime = 2000) => {
        
        // ensure that messageText is a string and is not empty
        const messageText = String(message);
        if (!messageText || messageText.length < 1) {
            throw new Error(`Invalid or empty message text.`);
        }

        // ensure that displayTime is a positive integer
        if (!Number.isInteger(displayTime) || displayTime <= 0) {
            throw new Error(`Attribute displayTime must be a positive integer`);
        }

        // log end of validation process
        console.log(`Attributes for creating new message have been successfully validated`);

        // set time after which the message dissappears
        const vanishTime = 2500;
        
        // generate a random id for DOM element using `type` attribute and a random integer
        const randomInt = crypto.getRandomValues(new Uint8Array(1));
        const messageID = `${type}-${randomInt}`

        // create message DOM element
        let messageElement = document.createElement(`div`);
        // add class for block (BEM methodology)
        messageElement.classList.add(`alert`);
        // add class for modifier (BEM methodology)
        messageElement.classList.add(`alert--${type}`);
        // set ID
        messageElement.setAttribute(`id`, messageID);
        // set textContent
        messageElement.textContent = messageText;
        // set animation declared in CSS file
            // animation changes opacity from 1 to 0 during time specified in `vanishTime`
            // animation is delayed by `displayTime`
            // message is removed form DOM before the animation ends
        messageElement.style.animation = `vanish ${vanishTime}ms ${displayTime}ms`;
        // append message DOM element
        appendTo.appendChild(messageElement);

        // remove message from DOM after specified amount of time
        setTimeout(() => {
            // select DOM element using its ID
            const messageToRemove = document.querySelector(`#${messageID}`)
            // remove DOM element
            messageToRemove.remove();
        }, displayTime + vanishTime - 500);
    }
}

const displaySuccessMessage = createMessage('success');
const displayWarningMessage = createMessage('warning');
const displayErrorMessage = createMessage('error');