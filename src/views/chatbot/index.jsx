import { useEffect, useState, useRef } from "react";
import React from "react";

function ChatBot() {
    const [chatHistory, setChatHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [userId, setUserId] = useState('');
    useEffect(() => {
        console.log("chat history 변경: ", chatHistory);
    }, [chatHistory]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handleUserIdChange =(e) => {
        setUserId(e.target.value);
    }

    /* url로 요청 */
    const sendMessage = async (event) => {
        event.preventDefault();

        const newMessage = { sender: `${userId}`, message: inputValue };
        const data = {
            message: inputValue,
        };
        setChatHistory([...chatHistory, newMessage]);

        try {
            const url = `https://moreburger.org/api/chatbot/${userId}`;

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };

            const result = await fetch(url, options);

            if (!result.ok) {
                throw new Error(`HTTP error! status: ${result.status}`);
            }

            const jsonResponse = await result.json();
            const botMessage = { sender: 'bot', message: jsonResponse.response };

            setChatHistory(prevHistory => [...prevHistory, botMessage]);

        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage = { sender: 'bot', message: "Failed to get a response from the server." };
            setChatHistory(prevHistory => [...prevHistory, errorMessage]);
        }

        setInputValue('');
    };

    return (
        <div>
            <div className="chat-window">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender}`}>
                        <span>{message.message}</span>
                    </div>
                ))}
            </div>

            <form onSubmit={sendMessage}>
                <input 
                    type="text" 
                    value={userId} 
                    onChange={handleUserIdChange} 
                    placeholder="userId" 
                />

                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="무엇이든 물어보세요" 
                />
                <button type="submit">전송</button>
            </form>
        </div>
    );
}

export default ChatBot;