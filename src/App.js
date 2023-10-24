// import "./App.css";
import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react"; // Import from semantic-ui-react

function App() {
  const steps = [
    {
      id: "Greet",
      message: "Hello,Welcome to our website ",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue},Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "React", label: "React ", trigger: "React" },
        { value: "Angular", label: "Angular ", trigger: "Angular" }, // Unique value
      ],
    },
    {
      id: "React",
      message: "Thanks for telling your React issue",
      end: true,
    },
    {
      id: "Angular",
      message: "Thanks for telling your Angular issue",
      end: true,
    },
  ];

  return (
    <>
      <Segment floated="right">
        <ChatBot steps={steps} />
      </Segment>
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="app-container">
//       <div
//         className={`chatbot-button ${isOpen ? "chatbot-hidden" : ""}`}
//         onClick={toggleChatbot}
//       >
//         <span className="chatbot-icon">💬</span>
//         <span className="chatbot-message">Chat with us</span>
//       </div>
//       {isOpen && (
//         <div className="chatbot-window">
//           {/* Chatbot chat interface */}
//           {/* You can add your chatbot messages and input here */}
//           <div className="chatbot-message">
//             Hello! How can I assist you today?
//           </div>
//           {/* Sample user message */}
//           <div className="user-message">User: Hi there!</div>
//           {/* Sample bot message */}
//           <div className="bot-message">Bot: Hello! How can I help you?</div>
//           {/* Sample chat input */}
//           <input type="text" placeholder="Type your message..." />
//           <button>Send</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
