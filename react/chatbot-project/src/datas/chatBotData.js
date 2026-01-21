const ChatBot = {
  getResponse: function (val) {
    const response = {
      hi: "hi how are you",
      name: "my name is chatbot",
    };
    return response[val] || "Don't know";
  },
};

export { ChatBot };
