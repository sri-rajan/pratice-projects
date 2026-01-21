import { useState } from "react";
import { ChatBot } from "../datas/chatBotData";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function saveInputTest(event) {
    const value = event.target.value;
    setInputText(value);
  }
  function sendMessage() {
    const newMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newMessage);
    setInputText("");
    const response = ChatBot.getResponse(inputText);
    setChatMessages([
      ...newMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputTest}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

export { ChatInput };
