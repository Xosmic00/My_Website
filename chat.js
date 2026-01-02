const chatDisplay = document.getElementById('chatDisplay');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('sendBtn');

function postMessage() {
    const user = usernameInput.value.trim() || "Guest";
    const msg = messageInput.value.trim();

    if (msg !== "") {
        const newMsg = document.createElement('div');
        newMsg.className = 'msg-bubble';
        newMsg.innerHTML = `<b>${user}:</b> ${msg}`;
        
        chatDisplay.appendChild(newMsg);
        
        // Auto-scroll to bottom
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
        
        // Clear input
        messageInput.value = "";
    }
}

sendBtn.addEventListener('click', postMessage);

messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') postMessage();
});