import "./ChatMessage.css";
function ChatMessage(props) {
  const message = props.message;
  const sender = props.sender;
  const userLogo =
    "https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg";
  const robotLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHFZ8rfNbxWo9Vc4a2ENo7w7exXb9dn9ppA&s";

  return (
    <div
      className={sender == "robot" ? "chat-message-robot" : "chat-message-user"}
    >
      {sender == "robot" && <img src={robotLogo} alt="prf" width="50" />}
      <div className="chat-message-text">{message}</div>
      {sender != "robot" && <img src={userLogo} alt="prf" width="50" />}
    </div>
  );
}

export { ChatMessage };
