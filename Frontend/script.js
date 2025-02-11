// Define model lists for each section at the start
const modelSections = {
    'Text': [
        {
            icon: 'G3',
            name: 'GPT-3.5-Turbo',
            description: 'Fast & Reliable',
            badge: '',
            modelId: 'gpt-3.5-turbo'
        },
        {
            icon: 'G4',
            name: 'GPT-4o',
            description: 'Most Capable',
            badge: 'PRO',
            modelId: 'gpt-4'
        },
        {
            icon: 'DS',
            name: 'DeepSeek V3 671B',
            description: 'Advanced Reasoning',
            badge: 'BETA',
            modelId: 'deepseek-671b'
        }
    ],
    'Code': [
        {
            icon: 'G3',
            name: 'GPT-3.5-Turbo',
            description: 'Fast Code Generation',
            badge: '',
            modelId: 'gpt-3.5-turbo'
        },
        {
            icon: 'G4',
            name: 'GPT-4o',
            description: 'Complex Solutions',
            badge: 'PRO',
            modelId: 'gpt-4'
        },
        {
            icon: 'DS',
            name: 'DeepSeek V3 67B',
            description: 'Specialized Coding',
            badge: 'BETA',
            modelId: 'deepseek-67b'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Get all required elements at the start
    const initialScreen = document.getElementById('initial-screen');
    const chatScreen = document.getElementById('chat-screen');
    const generateButton = document.getElementById('generate-button');
    const chatButton = document.getElementById('chat-button');
    const modelsButton = document.querySelector('.models-button');
    const modelsDropdown = document.querySelector('.models-dropdown');
    const chatHistory = document.querySelector('.chat-history');
    const modelsDropdownBtn = document.querySelector('.models-dropdown-btn');
    const modelsMenu = document.querySelector('.models-menu');
    const newChatBtn = document.querySelector('.new-chat-btn');
    const messagesContainer = document.querySelector('.chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const initialInput = document.querySelector('#initial-screen input');
    const sectionTabs = document.querySelectorAll('.section-tab');
    const modelsList = document.querySelector('.models-list'); // Declare once at the top

    // Add current model state
    let currentModel = {
        id: 'gpt-3.5-turbo',
        name: 'GPT-3.5-Turbo'
    };

    // Add section type tracking
    let currentSection = 'Text';

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
        messagesContainer.style.display = 'flex';
        chatInput.style.display = 'flex';
        newChatScreen.style.display = 'none';

        // Add initial AI message if messages container is empty
        if (!messagesContainer.hasChildNodes()) {
            messagesContainer.innerHTML = `
                <div class="messages-wrapper">
                    <div class="message ai-message">
                        <div class="message-content">
                            Using ${currentModel.name}. How can I help you today?
                        </div>
                    </div>
                </div>
            `;
        }

        // Ensure proper layout
        const chatMain = document.querySelector('.chat-main');
        chatMain.style.display = 'flex';
        chatMain.style.flexDirection = 'column';
    }

    // Handle Enter key press on initial input
    initialInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (initialInput.value.trim()) {
                generateButton.click();
            }
        }
    });

    // Add this function to check if user is scrolled to bottom
    function isScrolledToBottom(element) {
        return Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 50;
    }

    // Update the typeText function to remove all auto-scrolling
    function typeText(contentDiv, response, messagesContainer) {
        let index = 0;

        function type() {
            if (index < response.length) {
                contentDiv.textContent += response.charAt(index);
                index++;
                setTimeout(type, 30);
            }
        }
        type();
    }

    // Function to disable input while processing
    function disableInput() {
        chatInput.disabled = true;
        sendButton.classList.add('disabled');
        sendButton.disabled = true;
    }

    // Function to enable input after processing
    function enableInput() {
        chatInput.disabled = false;
        sendButton.classList.remove('disabled');
        sendButton.disabled = false;
    }

    // Handle Generate button click
    generateButton.addEventListener('click', async () => {
        const question = initialInput.value.trim();
        if (!question) return;

        // Switch to chat interface
        initialScreen.style.display = 'none';
        chatScreen.style.display = 'flex';

        // Add to chat history
        addToHistory(question);

        // Add the user's question to the chat
        messagesContainer.innerHTML = `
            <div class="messages-wrapper">
                <div class="message user-message">
                    <div class="message-content">${question}</div>
                </div>
            </div>
        `;

        // Disable input while processing
        disableInput();

        try {
            // Show loading indicator
            messagesContainer.innerHTML += `
                <div class="messages-wrapper">
                    <div class="message ai-message loading">
                        <div class="message-content">
                            <div class="typing-indicator">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Get AI response
            const response = await callOpenAI(question);

            // Remove loading indicator
            const loadingMessage = messagesContainer.querySelector('.loading');
            if (loadingMessage) {
                loadingMessage.remove();
            }

            // Create and append the AI message with typing animation
            const { element, contentDiv } = createMessage('ai-message', '');
            messagesContainer.appendChild(element);

            // Use the updated typeText function without auto-scrolling
            typeText(contentDiv, response, messagesContainer);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            // Re-enable input after processing
            enableInput();
        }
    });

    // Handle New Chat button click
    newChatBtn.addEventListener('click', () => {
        // Clear current chat messages but keep history
        clearChat();
        
        // Add placeholder message for new chat
        messagesContainer.innerHTML = `
            <div class="messages-wrapper">
                <div class="message ai-message">
                    <div class="message-content">
                        How can I help you today?
                    </div>
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
        const chatMain = document.querySelector('.chat-main');
        
        // Preserve the flex layout
        chatMain.style.display = 'flex';
        chatMain.style.flexDirection = 'column';
        
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
        
        // Show Text models immediately when opening the menu
        if (modelsMenu.classList.contains('show')) {
            // Set Text tab as active
            sectionTabs.forEach(t => t.classList.remove('active'));
            sectionTabs[0].classList.add('active');
            
            // Show Text models
            updateModelsList('Text');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!modelsMenu.contains(e.target) && !modelsDropdownBtn.contains(e.target)) {
            modelsMenu.classList.remove('show');
        }
    });

    // Update section tabs click handler to track current section
    sectionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sectionTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSection = tab.textContent.trim();
            updateModelsList(currentSection);
        });
    });

    // Update handleModelSelect function
    function handleModelSelect(model) {
        currentModel = {
            id: model.modelId,
            name: model.name,
            section: currentSection // Track which section the model was selected from
        };
        
        console.log('Switching to model:', currentModel);
        modelsMenu.classList.remove('show');

        if (model.redirect) {
            // Hide initial screen if visible
            const initialScreen = document.getElementById('initial-screen');
            if (initialScreen) {
                initialScreen.style.display = 'none';
            }
            
            // Show chat screen
            const chatScreen = document.getElementById('chat-screen');
            chatScreen.style.display = 'flex';
            
            // Show chat interface
            showChatInterface();
            
            // Add initial AI message with model info
            const messagesContainer = document.querySelector('.chat-messages');
            const welcomeMessage = currentModel.section === 'Code' 
                ? `You are now using ${currentModel.name} Code Intelligence. What would you like to build?`
                : `Now using ${currentModel.name}. How can I help you today?`;

            messagesContainer.innerHTML = `
                <div class="messages-wrapper">
                    <div class="message ai-message">
                        <div class="message-content">
                            ${welcomeMessage}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Update createModelItem to use a simpler click handler
    function createModelItem(model) {
        const div = document.createElement('div');
        div.className = 'model-item';
        div.innerHTML = `
            <div class="model-icon ${model.icon}">${model.icon}</div>
            <div class="model-info">
                <div class="model-name">${model.name}</div>
                <div class="model-desc">${model.description}</div>
            </div>
            ${model.badge ? `<div class="model-badge ${model.badge.toLowerCase()}">${model.badge}</div>` : ''}
        `;
        
        // Add click handler directly
        div.addEventListener('click', () => {
            handleModelSelect({
                ...model,
                redirect: true
            });
        });
        
        return div;
    }

    // Update how we add models to the list
    function updateModelsList(section) {
        modelsList.innerHTML = '';
        modelSections[section].forEach(model => {
            modelsList.appendChild(createModelItem(model));
        });
    }

    // Initialize models list
    updateModelsList('Text');

    // Listen for model selection
    document.addEventListener('modelSelect', (e) => {
        handleModelSelect(e.detail);
        console.log('Selected model:', currentModel);
    });

    // Update API call function to use current model
    async function callOpenAI(message) {
        try {
            const response = await fetch('https://ven-fork.onrender.com/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    model: currentModel.id
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

    // Update the message creation to include typing animation
    function createMessage(type, content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'messages-wrapper';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        messageDiv.appendChild(contentDiv);
        wrapper.appendChild(messageDiv);
        
        return {
            element: wrapper,
            contentDiv: contentDiv
        };
    }

    // Update the sendMessage function to only scroll once when sending the message
    async function sendMessage() {
        const question = chatInput.value.trim();
        if (!question) return;
        
        // Add to history
        addToHistory(question);

        // Add user message
        messagesContainer.innerHTML += `
            <div class="messages-wrapper">
                <div class="message user-message">
                    <div class="message-content">${question}</div>
                </div>
            </div>
        `;

        // Clear input
        chatInput.value = '';

        // Initial scroll to show the sent message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Show loading indicator
        messagesContainer.innerHTML += `
            <div class="messages-wrapper">
                <div class="message ai-message loading">
                    <div class="message-content">
                        <div class="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Get AI response
        const response = await callOpenAI(question);

        // Remove loading indicator
        const loadingMessage = messagesContainer.querySelector('.loading');
        if (loadingMessage) {
            loadingMessage.remove();
        }

        // Create and append the AI message with typing animation
        const { element, contentDiv } = createMessage('ai-message', '');
        messagesContainer.appendChild(element);

        // Use the updated typeText function without auto-scrolling
        typeText(contentDiv, response, messagesContainer);
    }

    // Handle send button click
    sendButton.addEventListener('click', sendMessage);

    async function handleSendMessage() {
        const message = chatInput.value.trim();
        if (!message || sendButton.disabled) return;

        // Disable input while processing
        disableInput();
        
        try {
            // Your existing send message logic here
            await sendMessageToAI(message);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            // Re-enable input after response is complete
            enableInput();
        }
    }

    // Add event listeners
    sendButton.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });

    // Keep just one set of modal-related code
    const loginSignupBtn = document.querySelector('.login-signup-btn');
    const upgradeButtonMobile = document.querySelector('.upgrade-button-mobile');
    const upgradeButtonDesktop = document.querySelector('.upgrade-button-right');
    const accountModal = document.getElementById('accountModal');
    const closeModalBtn = document.querySelector('.close-modal');

    // Add click handlers for all buttons that should open the modal
    loginSignupBtn.addEventListener('click', () => {
        accountModal.classList.add('show');
    });

    upgradeButtonMobile.addEventListener('click', () => {
        accountModal.classList.add('show');
    });

    upgradeButtonDesktop.addEventListener('click', () => {
        accountModal.classList.add('show');
    });

    // Close modal handlers
    closeModalBtn.addEventListener('click', () => {
        accountModal.classList.remove('show');
    });

    // Close modal when clicking outside
    accountModal.addEventListener('click', (e) => {
        if (e.target === accountModal) {
            accountModal.classList.remove('show');
        }
    });
}); 
