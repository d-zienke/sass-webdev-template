const messageBtn = document.querySelector('#message-btn')
messageBtn.addEventListener('click', () => {
    displayWarningMessage('Example Warning Message', messageBtn, 1500);
})