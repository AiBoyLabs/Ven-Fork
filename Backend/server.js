const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: '*', // For development. In production, specify your frontend domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Add a root route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, model = "gpt-3.5-turbo" } = req.body;

        // Validate model selection
        const validModels = ['gpt-3.5-turbo', 'gpt-4'];
        const selectedModel = validModels.includes(model) ? model : 'gpt-3.5-turbo';

        const completion = await openai.chat.completions.create({
            model: selectedModel, // Will use either gpt-3.5-turbo or gpt-4
            messages: [{ role: "user", content: message }],
            temperature: 0.7,
            max_tokens: 1000
        });

        res.json({
            message: completion.choices[0].message.content,
            model: selectedModel // Send back which model was used
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Failed to get response from OpenAI',
            details: error.message 
        });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
