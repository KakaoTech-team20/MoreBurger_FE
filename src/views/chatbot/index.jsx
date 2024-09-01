import { useEffect, useState, useRef } from "react";
import React from "react";
import { ChatFeed, Message } from "react-chat-ui";

// material-ui
import { Grid, Input, Button, DialogContent } from "@mui/material";
import { fontFamily, fontSize, useTheme } from "@mui/system";

function ChatBot() {
    /* user id 받아오기 */
    const theme = useTheme();
    const [chatHistory, setChatHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [userId, setUserId] = useState('user1234');
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

        const newMessage = new Message({ id: 0, senderName: `${userId}`, message: inputValue });
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
            const botMessage = new Message({ id:1, senderName: 'bot', message: jsonResponse.response });

            setChatHistory(prevHistory => [...prevHistory, botMessage]);

        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage = new Message({ id: 1, message: "Failed to get a response from the server.", senderName: "bot" });
            setChatHistory(prevHistory => [...prevHistory, errorMessage]);
        }

        setInputValue('');
    };

    return (
        <>
        <Grid container>
            <ChatFeed
                messages={chatHistory}
                isTyping={false}
                hasInputField={false}
                bubblesCentered={false}
                bubbleStyles={{
                    text: {
                        fontSize: '1rem',
                        fontFamily: theme.fontFamily
                    }
                }}
            ></ChatFeed>
        </Grid>

        <form onSubmit={sendMessage}
            style={{
                position: 'fixed',
                bottom: 0,
                width: 570,
                backgroundColor: 'white',
                padding: '10px',
            }}
        >
            <Grid container margin="auto">
                <Grid item xs={10}>
                    <Input
                        fullWidth
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="무엇이든 물어보세요">
                    </Input>                        
                </Grid>
                <Grid item xs={2}>
                    <Button type="submit">전송</Button> 
                </Grid>
            </Grid>
        </form>
        </>
    );
}

export default ChatBot;