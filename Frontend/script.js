* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0B1623;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    text-align: center;
    padding: 20px;
    width: 100%;
    max-width: 600px;
}

.logo-container {
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
}

.florence-logo {
    width: 180px;
    height: 180px;
    object-fit: contain;
    opacity: 0.9;
}

h1 {
    color: white;
    font-size: 42px;
    font-weight: 300;
    margin-bottom: 16px;
    text-align: center;
    letter-spacing: -0.5px;
    margin-top: -8px;
}

.input-container {
    width: 100%;
    max-width: 540px;
    display: flex;
    gap: 16px;
    margin: 0 auto;
    padding: 0 24px;
}

.input-container input {
    flex: 1;
    padding: 16px 20px;
    height: 56px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    color: white;
    font-size: 15px;
    transition: all 0.2s ease;
}

.input-container input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.07);
}

#generate-button {
    padding: 0 32px;
    height: 56px;
    background: linear-gradient(135deg, 
        rgba(37, 99, 235, 0.5),     /* 50% transparent royal blue */
        rgba(79, 70, 229, 0.5)      /* 50% transparent deep indigo */
    );
    border: 1px solid rgba(255, 255, 255, 0.1); /* Added subtle border */
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.95);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    backdrop-filter: blur(8px); /* Added blur effect */
}

/* Hover state */
#generate-button:hover {
    background: linear-gradient(135deg, 
        rgba(37, 99, 235, 0.6),
        rgba(79, 70, 229, 0.6)
    );
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

/* Active state */
#generate-button:active {
    transform: translateY(0px);
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
}

/* Chat interface styles */
.chat-container {
    display: flex;
    height: 100vh;
    width: 100%;
    background: #0B1623;
    color: white;
}

.chat-main {
    margin-left: 260px;
    margin-top: 56px;
    margin-bottom: 120px;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 176px);
    padding: 0;
    position: relative;
}

.chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    scroll-behavior: smooth;
}

.messages-wrapper {
    width: 100%;
    padding: 0 300px;
    display: flex;
    flex-direction: column;
}

.message {
    display: flex;
    max-width: 55%;
    gap: 8px;
    align-items: flex-start;
    word-break: break-word;
    animation: messageSlide 0.3s ease;
}

/* User messages on the right but more centered */
.user-message {
    align-self: flex-end;
    margin-right: 40px;
}

/* AI messages on the left but more centered */
.ai-message {
    align-self: flex-start;
    margin-left: 40px;
}

/* Remove any nested margins */
.messages-wrapper .message {
    margin-left: inherit;
    margin-right: inherit;
}

.message-avatar {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ai-message .message-avatar {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.user-message .message-avatar {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.message-content {
    font-size: 14px;
    line-height: 1.5;
    color: white;
    overflow-wrap: break-word;
    min-width: 0;
    max-height: 70vh;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 10px 14px;
    border-radius: 12px;
}

/* Alternative 1: Teal-blue gradient */
.user-message .message-content {
    background: linear-gradient(135deg, 
        rgba(56, 189, 248, 0.3),    /* Light blue */
        rgba(14, 165, 233, 0.2)     /* Teal */
    );
}

/* Alternative 2: Emerald gradient */
.user-message .message-content {
    background: linear-gradient(135deg, 
        rgba(52, 211, 153, 0.3),    /* Emerald */
        rgba(16, 185, 129, 0.2)     /* Green */
    );
}

/* Alternative 3: Soft violet gradient */
.user-message .message-content {
    background: linear-gradient(135deg, 
        rgba(139, 92, 246, 0.3),    /* Violet */
        rgba(124, 58, 237, 0.2)     /* Purple */
    );
}

.ai-message .message-content {
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.9);
}

.ai-message .message-content::after {
    display: none;
}

/* Add message animations */
@keyframes messageSlide {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Update chat input styles */
.chat-input {
    position: fixed;
    bottom: 0;
    left: 260px;
    right: 0;
    padding: 20px 10%;
    background: #0B1623;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    gap: 8px;
    z-index: 1000;
}

.chat-input .input-wrapper {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: center;
}

.chat-input input {
    flex: 1;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 12px 16px;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    height: 45px;
    padding-right: 50px;
}

.chat-input input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.send-button {
    height: 45px;
    width: 45px;
    padding: 0;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    right: 0;
}

.send-button:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
}

.send-button svg {
    width: 20px;
    height: 20px;
}

/* Desktop upgrade button (next to input) */
.upgrade-button-right {
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.2),
        rgba(168, 85, 247, 0.2)
    );
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    font-weight: 500;
    padding: 8px 16px;
    white-space: nowrap;
    backdrop-filter: blur(8px);
    cursor: pointer;
}

/* Mobile version (in top bar) */
.upgrade-button-mobile {
    display: none; /* Hidden by default on desktop */
}

/* Mobile adjustments */
@media screen and (max-width: 768px) {
    .upgrade-button-right {
        display: none; /* Hide desktop version */
    }

    .upgrade-button-mobile {
        display: block;
        background: linear-gradient(135deg, 
            rgba(99, 102, 241, 0.25),
            rgba(168, 85, 247, 0.25)
        );
        border: 1px solid rgba(168, 85, 247, 0.3);
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.95);
        font-size: 13px;
        font-weight: 600;
        padding: 8px 16px;
        white-space: nowrap;
        backdrop-filter: blur(8px);
        cursor: pointer;
        margin: 0 4px;
        letter-spacing: 0.2px;
    }

    /* Remove hover effects */
    .upgrade-button-mobile:hover {
        background: linear-gradient(135deg, 
            rgba(99, 102, 241, 0.2),
            rgba(168, 85, 247, 0.2)
        );
        transform: none;
    }

    .chat-main {
        margin-left: 0;
        margin-top: 60px;
        margin-bottom: 100px;
    }

    .chat-messages {
        padding-bottom: 20px;
    }

    .logo-container {
        margin-bottom: 0px;
    }

    h1 {
        margin-top: -6px;
    }

    .florence-logo {
        width: 140px;
        height: 140px;
    }
}

@media screen and (max-width: 480px) {
    .upgrade-button-mobile {
        padding: 7px 14px;
        font-size: 12px;
    }
}

/* Update upgrade button styling - completely static version */
.upgrade-button-centered {
    position: static;
    padding: 8px 16px;
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.2),
        rgba(168, 85, 247, 0.2)
    );
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    backdrop-filter: blur(8px);
    margin: 0 4px;
}

/* Remove hover effects completely */
.upgrade-button-centered:hover {
    /* No hover effects */
}

.upgrade-button-centered:active {
    /* No active effects */
}

/* Mobile adjustments */
@media screen and (max-width: 768px) {
    .upgrade-button-centered {
        padding: 6px 12px;
        font-size: 12px;
        border-radius: 6px;
    }
}

@media screen and (max-width: 480px) {
    .upgrade-button-centered {
        padding: 5px 10px;
        font-size: 11px;
        margin: 0 3px;
    }
}

/* Add a subtle glow animation */
@keyframes buttonGlow {
    0% { box-shadow: 0 2px 8px rgba(168, 85, 247, 0.15); }
    50% { box-shadow: 0 2px 12px rgba(168, 85, 247, 0.3); }
    100% { box-shadow: 0 2px 8px rgba(168, 85, 247, 0.15); }
}

/* Add new styles for chat interface */
.chat-header {
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.search-bar input {
    width: 240px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
}

.header-buttons {
    display: flex;
    gap: 12px;
}

.models-button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.upgrade-button {
    position: absolute;
    right: 12px;
    bottom: 85px;
    padding: 8px 16px;
    background: linear-gradient(135deg, #EC4899 0%, #D946EF 100%);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
    z-index: 10;
}

.upgrade-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(236, 72, 153, 0.4);
}

.models-dropdown {
    position: absolute;
    top: 60px;
    right: 20px;
    background: #1E2A38;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.models-header {
    display: flex;
    gap: 20px;
    padding: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.model-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    cursor: pointer;
}

.model-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.G3 {
    background: #64B5F6;
}

.chat-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 260px;
    background: #0B1623;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-section {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.section-title {
    color: #4A4A57;
    font-size: 12px;
    padding: 0 12px;
    margin-bottom: 4px;
}

.sidebar-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.2s;
}

.sidebar-item:hover {
    background: rgba(255, 255, 255, 0.05);
}

.sidebar-item svg {
    opacity: 0.7;
}

/* Update new chat screen styles */
.new-chat-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.new-chat-label {
    color: #00CF9D;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 16px;
    background: rgba(0, 207, 157, 0.1);
    padding: 4px 12px;
    border-radius: 12px;
}

.new-chat-screen h2 {
    color: white;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
}

.option-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 400px;
}

.option-button {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(66, 133, 244, 0.1);
    border-radius: 8px;
    color: white;
    cursor: pointer;
    width: 100%;
    text-align: left;
    transition: all 0.2s ease;
    height: 56px;
}

.option-icon {
    font-size: 20px;
    min-width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4285F4;
}

.develop-code .option-icon {
    color: #EA4335;
}

.option-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.option-title {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 2px;
    color: white;
}

.option-description {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
}

.arrow-icon {
    font-size: 18px;
    opacity: 0.5;
    margin-left: 8px;
}

.option-button:hover {
    background: rgba(66, 133, 244, 0.15);
}

.develop-code {
    background: rgba(234, 67, 53, 0.1);
}

.develop-code:hover {
    background: rgba(234, 67, 53, 0.15);
}

/* Top bar styling */
.top-bar {
    position: fixed;
    top: 0;
    left: 260px;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    background: rgba(11, 22, 35, 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 1000;
}

.left-side, .right-side {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Models button styling */
.models-dropdown-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.models-dropdown-btn:hover {
    background: linear-gradient(to right, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
    border-color: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
}

.models-dropdown-btn svg {
    opacity: 0.7;
    transition: all 0.2s ease;
}

.models-dropdown-btn:hover svg {
    opacity: 0.9;
}

/* Mobile adjustments */
@media screen and (max-width: 768px) {
    .models-dropdown-btn {
        padding: 6px 12px;
        font-size: 13px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.04);
    }
}

/* Mobile adjustments for top bar and buttons */
@media screen and (max-width: 768px) {
    .top-bar {
        left: 0;
        padding: 8px 12px;
        gap: 8px; /* Add gap between buttons */
    }

    .models-dropdown-btn {
        padding: 6px 10px; /* Reduce padding */
        font-size: 12px;
        min-width: auto; /* Remove minimum width */
        background: rgba(255, 255, 255, 0.04);
        border-radius: 6px;
    }

    .new-chat-btn {
        padding: 6px 10px;
        font-size: 12px;
        border-radius: 6px;
    }
}

/* Even smaller screens */
@media screen and (max-width: 480px) {
    .top-bar {
        padding: 6px 8px;
        gap: 6px; /* Reduce gap further */
    }

    .models-dropdown-btn {
        padding: 5px 8px; /* Make even more compact */
        font-size: 11px;
    }

    .new-chat-btn {
        padding: 5px 8px;
        font-size: 11px;
    }

    /* Adjust the dropdown arrow size */
    .models-dropdown-btn svg {
        width: 10px;
        height: 10px;
    }
}

/* Mobile styles */
@media screen and (max-width: 768px) {
    .top-bar {
        left: 0;
        padding: 8px 12px;
    }

    .models-dropdown-btn {
        padding: 6px 12px;
        font-size: 13px;
    }

    .new-chat-btn {
        padding: 6px 12px;
        font-size: 13px;
    }

    /* Adjust chat layout */
    .chat-main {
        margin-left: 0;
        margin-top: 60px;
        margin-bottom: 100px;
    }

    .chat-sidebar {
        display: none; /* Hide sidebar on mobile */
    }

    .messages-wrapper {
        padding: 0 20px; /* Reduce padding for messages */
    }

    .message {
        max-width: 85%; /* Allow messages to be wider on mobile */
    }

    /* Adjust input area */
    .chat-input {
        left: 0;
        padding: 16px;
    }

    .chat-input .input-wrapper {
        padding: 0 8px;
    }

    /* Adjust models dropdown */
    .models-dropdown-btn {
        padding: 4px 10px;
        font-size: 13px;
    }

    .models-menu {
        position: fixed; /* Use fixed positioning on mobile */
        top: 56px; /* Align with top bar */
        left: 12px;
        right: 12px;
        width: calc(100% - 24px);
        margin: 0;
    }

    .models-sections {
        padding: 6px;
        border-radius: 12px 12px 0 0;
    }

    .section-tab {
        padding: 6px 12px;
        font-size: 12px;
    }

    .models-list {
        padding: 6px;
    }

    .model-item {
        padding: 10px;
        margin: 2px 0;
        border-radius: 8px;
    }

    .model-icon {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        font-size: 14px;
    }

    .model-name {
        font-size: 13px;
    }

    .model-desc {
        font-size: 11px;
    }

    .models-info {
        padding: 12px;
        font-size: 11px;
    }

    /* Make buttons more touch-friendly */
    .send-button {
        height: 48px;
        width: 48px;
    }

    .chat-input input {
        height: 48px;
    }

    /* Adjust new chat screen */
    .new-chat-screen {
        padding: 16px;
    }

    .option-buttons {
        width: 90%;
    }

    h1 {
        font-size: 36px;
        margin-bottom: 32px;
    }

    .input-container {
        flex-direction: column;
        gap: 12px;
        padding: 0 20px;
    }

    .input-container input,
    #generate-button {
        width: 100%;
        height: 52px;
    }
}

@media screen and (max-width: 480px) {
    .top-bar {
        padding: 8px;
    }

    .models-dropdown-btn, .new-chat-btn {
        padding: 6px 10px;
        font-size: 12px;
    }

    .messages-wrapper {
        padding: 0 12px;
    }

    .message {
        max-width: 90%;
    }

    .user-message {
        margin-right: 12px;
    }

    .ai-message {
        margin-left: 12px;
    }

    new-chat-screen h2 {
        font-size: 24px;
    }

    h1 {
        font-size: 32px;
        margin-bottom: 24px;
    }

    .input-container {
        padding: 0 16px;
    }

    .input-container input,
    #generate-button {
        height: 44px;
    }

    .models-menu {
        top: 52px;
        left: 6px;
        right: 6px;
        width: calc(100% - 12px);
    }

    .model-item {
        padding: 8px;
    }

    .model-icon {
        width: 32px;
        height: 32px;
    }
}

/* Add smooth transitions for resizing */
.chat-main, .messages-wrapper, .message {
    transition: all 0.3s ease;
}

/* Add style for DeepSeek icon */
.DS {
    background: linear-gradient(135deg, #9333EA, #7C3AED); /* Purple gradient for DeepSeek */
}

/* Update initial screen styles for perfect centering */
#initial-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 20px;
    max-width: 600px;
    margin: 0 auto;
}

/* Models menu styling */
.models-menu {
    position: absolute;
    top: calc(100% + 8px); /* Position below the button with 8px gap */
    left: 0;
    background: #1E2A38;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    width: 300px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
    z-index: 1001; /* Ensure it's above other elements */
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.2s ease;
    pointer-events: none;
}

/* Show menu when active */
.models-menu.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
}

/* Models sections styling */
.models-sections {
    display: flex;
    padding: 8px;
    gap: 6px;
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.section-tab {
    flex: 1;
    padding: 8px 16px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: pointer;
}

.section-tab:hover {
    color: rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.05);
}

.section-tab.active {
    color: white;
    background: rgba(255, 255, 255, 0.1);
}

/* Models list styling */
.models-list {
    padding: 8px;
    max-height: 360px;
    overflow-y: auto;
}

.model-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    margin: 4px 0;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
}

.model-item:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
}

.model-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.G3 { background: linear-gradient(135deg, #64B5F6, #1E88E5); }
.G4 { background: linear-gradient(135deg, #FF7043, #E64A19); }
.DS { background: linear-gradient(135deg, #9575CD, #5E35B1); }

.model-info {
    flex: 1;
    min-width: 0;
}

.model-name {
    color: white;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
}

.model-desc {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.model-badge {
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.pro {
    background: rgba(236, 72, 153, 0.1);
    color: #EC4899;
}

.beta {
    background: rgba(139, 92, 246, 0.1);
    color: #8B5CF6;
}

/* About section styling */
.models-info {
    padding: 16px;
    background: rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.models-info span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 8px;
}

.models-info p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    line-height: 1.5;
}

/* Only show menu when explicitly toggled */
.models-menu.show {
    display: block;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: all;
}

/* Hide models menu on initial screen */
#initial-screen .models-menu {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
}

/* New chat button styling */
.new-chat-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.new-chat-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
}

/* Plus icon styling */
.new-chat-btn svg {
    width: 16px;
    height: 16px;
    opacity: 0.8;
}

/* Mobile adjustments for new chat button */
@media screen and (max-width: 768px) {
    .new-chat-btn {
        padding: 6px 12px;
        font-size: 13px;
        border-radius: 6px;
    }
    
    .new-chat-btn svg {
        width: 14px;
        height: 14px;
    }
}

/* Wrapper for models button and dropdown */
.models-wrapper {
    position: relative;
    display: inline-block;
}

/* Add styles for the centered upgrade button */
.upgrade-button-centered {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + 32px); /* Increased from 24px to 32px to move higher */
    padding: 8px 16px;
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.2),
        rgba(168, 85, 247, 0.2)
    );
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 8px rgba(168, 85, 247, 0.15);
    z-index: 2;
}

.upgrade-button-centered:hover {
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.3),
        rgba(168, 85, 247, 0.3)
    );
    border-color: rgba(168, 85, 247, 0.4);
    transform: translateX(-50%) translateY(-1px);
    box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2);
}

.upgrade-button-centered:active {
    transform: translateX(-50%) translateY(0);
}

/* Mobile adjustments */
@media screen and (max-width: 768px) {
    .upgrade-button-centered {
        position: static; /* Remove absolute positioning */
        transform: none;
        bottom: auto;
        margin: 0 4px; /* Add small margins on sides */
        padding: 6px 12px;
        font-size: 12px;
        border-radius: 6px;
        background: linear-gradient(135deg, 
            rgba(99, 102, 241, 0.25),
            rgba(168, 85, 247, 0.25)
        );
        border: 1px solid rgba(168, 85, 247, 0.25);
        animation: none; /* Remove glow animation on mobile */
    }

    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px;
        gap: 6px;
    }
}

@media screen and (max-width: 480px) {
    .upgrade-button-centered {
        padding: 5px 10px;
        font-size: 11px;
        margin: 0 3px;
    }
}

/* Add upgrade button next to input field (desktop only) */
.chat-input .input-wrapper {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: center;
}

/* Update upgrade button styling with fixed colors */
.upgrade-button-right {
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.2),
        rgba(168, 85, 247, 0.2)
    );
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    font-weight: 500;
    padding: 8px 16px;
    white-space: nowrap;
    backdrop-filter: blur(8px);
    cursor: pointer;
}

/* Add hover state with slightly different gradient */
.upgrade-button-right:hover {
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.3),
        rgba(168, 85, 247, 0.3)
    );
    border-color: rgba(168, 85, 247, 0.4);
}

/* Hide on mobile */
@media screen and (max-width: 768px) {
    .upgrade-button-right {
        display: none;
    }
}

/* Add disabled state for send button */
.send-button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.05);
}

.send-button.disabled:hover {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.05);
}

/* Add disabled state for input */
.chat-input input:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* Sidebar footer with login button */
.sidebar-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.login-signup-btn {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: background 0.2s ease;
}

.login-signup-btn:hover {
    background: rgba(255, 255, 255, 0.08);
}

/* Account Modal */
.account-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.account-modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: #0F1923;
    border-radius: 12px;
    width: 90%;
    max-width: 480px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header {
    padding: 20px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px; /* Fixed height for better alignment */
}

.header-content {
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
    font-size: 18px;
    font-weight: 500;
}

.header-content svg {
    width: 24px; /* Reduced from 28px */
    height: 24px;
    stroke-width: 1.5px;
    color: rgba(255, 255, 255, 0.9);
}

.close-modal {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 24px; /* Reduced from 28px */
    cursor: pointer;
    padding: 8px;
    line-height: 1; /* Changed from 0.8 */
    font-weight: 400; /* Changed from 300 */
    transition: none;
    display: flex; /* Added for better alignment */
    align-items: center; /* Added for better alignment */
    justify-content: center; /* Added for better alignment */
    width: 40px; /* Fixed width */
    height: 40px; /* Fixed height */
}

/* Keep hover state static */
.close-modal:hover,
.close-modal:active {
    color: rgba(255, 255, 255, 0.5);
}

/* Mobile adjustments */
@media screen and (max-width: 768px) {
    .modal-header {
        padding: 16px 20px;
    }

    .header-content {
        font-size: 17px;
    }

    .header-content svg {
        width: 24px;
        height: 24px;
    }

    .close-modal {
        font-size: 26px;
    }
}

.modal-section {
    padding: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-section:last-child {
    border-bottom: none;
}

.modal-section h2 {
    color: white;
    font-size: 18px;
    margin-bottom: 12px;
}

.modal-section p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
}

.signup-btn, .upgrade-btn {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 12px;
}

.signup-btn {
    background: #3B82F6;
    border: none;
    color: white;
    /* Remove transitions */
    transition: none;
}

.upgrade-btn {
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.2),
        rgba(168, 85, 247, 0.2)
    );
    border: 1px solid rgba(168, 85, 247, 0.3);
    color: white;
    /* Remove transitions */
    transition: none;
}

/* Remove hover states */
.signup-btn:hover {
    background: #3B82F6;
}

.upgrade-btn:hover {
    background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.2),
        rgba(168, 85, 247, 0.2)
    );
    border: 1px solid rgba(168, 85, 247, 0.3);
}

.login-text {
    text-align: center;
    font-size: 13px;
}

.login-link {
    color: #3B82F6;
    text-decoration: none;
}

/* Mobile adjustments for account modal */
@media screen and (max-width: 768px) {
    .modal-content {
        width: 95%;
        margin: 20px;
        max-height: calc(100vh - 40px);
        overflow-y: auto;
    }

    .modal-header {
        padding: 14px;
    }

    .modal-section {
        padding: 20px;
    }

    .modal-section h2 {
        font-size: 17px;
    }

    .modal-section p {
        font-size: 13px;
    }

    .signup-btn, .upgrade-btn {
        padding: 12px; /* Slightly larger touch target */
    }
} 
