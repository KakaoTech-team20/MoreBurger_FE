import { useEffect, useState } from "react";
import React from "react";

function ChatBot() {
    const [response, setResponse] = useState(null);

    /* url로 요청 */
    const sendMessage = async () => {
        try {            
            const userId = 'SpicyGirl20';   // 임의 값
            const url = `https://moreburger.org/api/chatbot/${userId}`;

            const data = {
                message: ""
            };

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
            setResponse(jsonResponse);  // 서버의 응답을 state에 저장

        } catch (error) {
            console.error("Error sending message:", error);
            setResponse("서버에서 데이터 가져오는거 실패함");
        }
    };

    return (
        <form>
            <input type="text" placeholder="무엇이든 물어보세요"></input>
            <button className="send-button" type="submit" onClick={sendMessage}>➤</button>
        </form>
    );
}

export default ChatBot;