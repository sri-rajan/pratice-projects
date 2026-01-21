import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";

import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessageRef}>
      {chatMessages.map((chatmessage) => {
        return (
          <>
            <ChatMessage
              message={chatmessage.message}
              sender={chatmessage.sender}
              key={chatmessage.id}
            />
          </>
        );
      })}
    </div>
  );
}

export { ChatMessages };
