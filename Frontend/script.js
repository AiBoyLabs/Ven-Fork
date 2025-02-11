document.addEventListener('DOMContentLoaded', () => {
    const initialScreen = document.getElementById('initial-screen');
    const chatScreen = document.getElementById('chat-screen');
    const generateButton = document.querySelector('#initial-screen button');
    const chatButton = document.getElementById('chat-button');
    const modelsButton = document.querySelector('.models-button');
    const modelsDropdown = document.querySelector('.models-dropdown');
    const chatHistory = document.querySelector('.chat-history');
    const modelsDropdownBtn = document.querySelector('.models-dropdown-btn');
    const modelsMenu = document.querySelector('.models-menu');
    const newChatBtn = document.querySelector('.new-chat-btn');
    const messagesContainer = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.send-button');

    // Function to add chat to history
    function addToHistory(question) {
        const historyItem = document.createElement('div');
        historyItem.className = 'sidebar-item';
        // Truncate long questions
        const truncatedQuestion = question.length > 25 ? question.substring(0, 25) + '...' : question;
        historyItem.textContent = truncatedQuestion;
        chatHistory.appendChild(historyItem);
    }

    // Function to clear chat messages
    function clearChat() {
        messagesContainer.innerHTML = '';
        chatInput.value = '';
    }

    // Function to show chat interface
    function showChatInterface() {
        const messagesContainer = document.querySelector('.chat-messages');
        const chatInput = document.querySelector('.chat-input');
        const newChatScreen = document.querySelector('.new-chat-screen');
        
        // Show chat interface and hide options
        messagesContainer.style.display = 'block';
        chatInput.style.display = 'flex';
        newChatScreen.style.display = 'none';
    }

    // Handle Generate button click (first message)
    generateButton.addEventListener('click', async () => {
        const input = document.querySelector('#initial-screen input');
        const question = input.value;
        
        if (!question) return;

        // Switch to chat interface
        initialScreen.style.display = 'none';
        chatScreen.style.display = 'flex';

        // Add to chat history
        addToHistory(question);

        // Add the user's question to the chat
        messagesContainer.innerHTML += `
            <div class="message user-message">
                <div class="message-content">${question}</div>
            </div>
        `;

        // Simulate AI response
        setTimeout(() => {
            messagesContainer.innerHTML += `
                <div class="message ai-message">
                    <div class="message-content">
                        I'll help you with that question. What specifically would you like to know?
                    </div>
                </div>
            `;
        }, 1000);
    });

    // Handle New Chat button click
    newChatBtn.addEventListener('click', () => {
        // Clear current chat messages but keep history
        clearChat();
        
        // Add placeholder message for new chat
        messagesContainer.innerHTML = `
            <div class="message ai-message">
                <div class="message-content">
                    How can I help you today?
                </div>
            </div>
        `;
    });

    // Handle chat input for ongoing conversation
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Handle Chat button click
    chatButton.addEventListener('click', () => {
        const messagesContainer = document.querySelector('.chat-messages');
        const chatInput = document.querySelector('.chat-input');
        const newChatScreen = document.querySelector('.new-chat-screen');
        
        // Hide chat interface and show options
        messagesContainer.style.display = 'none';
        chatInput.style.display = 'none';
        newChatScreen.style.display = 'flex';
    });

    // Handle Text Conversation button click
    document.querySelector('.text-conversation').addEventListener('click', () => {
        showChatInterface();
    });

    // Update the models dropdown toggle
    modelsDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modelsMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!modelsMenu.contains(e.target) && !modelsDropdownBtn.contains(e.target)) {
            modelsMenu.classList.remove('show');
        }
    });

    // Handle model selection
    document.querySelectorAll('.model-item').forEach(item => {
        item.addEventListener('click', () => {
            // Handle model selection here
            modelsMenu.classList.remove('show');
        });
    });

    // Update the section tabs click handler
    const sectionTabs = document.querySelectorAll('.section-tab');
    const modelsList = document.querySelector('.models-list');

    // Define model lists for each section
    const modelSections = {
        Text: [
            { icon: 'G3', name: 'GPT-3.5', desc: '120K • Fastest' },
            { icon: 'G4', name: 'GPT-4', desc: '56K • Web Search', badges: ['DEFAULT', 'BETA'] },
            { icon: 'D6', name: 'DeepSeek R1 67B', desc: '55K • Web Search', badges: ['BETA', 'PRO'] },
            { icon: 'D7', name: 'DeepSeek R1 70B', desc: '56K • Web Search', badges: ['BETA', 'PRO'] }
        ],
        Image: [
            { icon: 'D1', name: 'DALL-E 3', desc: 'Highest Quality', badges: ['DEFAULT'] },
            { icon: 'M1', name: 'Midjourney', desc: 'Artistic Style', badges: ['PRO'] },
            { icon: 'S1', name: 'Stable Diffusion', desc: 'Fast Generation', badges: ['BETA'] }
        ],
        Code: [
            { icon: 'C3', name: 'CodeGPT-3.5', desc: 'Fast Coding Assistant' },
            { icon: 'C4', name: 'CodeGPT-4', desc: 'Advanced Logic', badges: ['DEFAULT', 'BETA'] },
            { icon: 'D8', name: 'DeepSeek Coder', desc: 'Specialized in Code', badges: ['PRO'] }
        ]
    };

    function createModelItem(model) {
        return `
            <div class="model-item">
                <div class="model-icon ${model.icon}">${model.icon}</div>
                <div class="model-info">
                    <div class="model-name">${model.name}</div>
                    <div class="model-desc">${model.desc}</div>
                </div>
                ${model.badges ? model.badges.map(badge => 
                    `<div class="model-badge ${badge.toLowerCase()}">${badge}</div>`
                ).join('') : ''}
            </div>
        `;
    }

    sectionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            sectionTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Animate model list change
            modelsList.classList.add('fade-out');
            
            setTimeout(() => {
                // Update models list based on selected section
                const section = tab.textContent.trim();
                modelsList.innerHTML = modelSections[section].map(createModelItem).join('');
                
                // Fade in new content
                modelsList.classList.remove('fade-out');
                modelsList.classList.add('fade-in');
                
                // Remove fade-in class after animation
                setTimeout(() => {
                    modelsList.classList.remove('fade-in');
                }, 300);
            }, 300);
        });
    });

    // Add this function to handle API calls
    async function callOpenAI(message, model = "gpt-3.5-turbo") {
        try {
            const response = await fetch('YOUR_RENDER_API_URL/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    model
                })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            return data.message;
        } catch (error) {
            console.error('Error:', error);
            return 'Sorry, there was an error processing your request.';
        }
    }

    // Update the sendMessage function
    async function sendMessage() {
        const question = chatInput.value.trim();
        if (!question) return;
        
        // Add to history
        addToHistory(question);

        // Add user message
        messagesContainer.innerHTML += `
            <div class="message user-message">
                <div class="message-content">${question}</div>
            </div>
        `;

        // Clear input
        chatInput.value = '';

        // Show loading indicator
        messagesContainer.innerHTML += `
            <div class="message ai-message loading">
                <div class="message-content">
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;

        // Get AI response
        const response = await callOpenAI(question);

        // Remove loading indicator and show response
        const loadingMessage = messagesContainer.querySelector('.loading');
        if (loadingMessage) {
            loadingMessage.remove();
        }

        messagesContainer.innerHTML += `
            <div class="message ai-message">
                <div class="message-content">${response}</div>
            </div>
        `;
    }

    // Handle send button click
    sendButton.addEventListener('click', sendMessage);
}); 