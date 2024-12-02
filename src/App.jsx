import "./App.css";
import Navbar from "./components/Navbar";
import Chats from "./components/Chats/Chats";
import Input from "./components/Input";
import { useEffect, useRef, useState } from "react";

function App() {
  const [btnAvailable, setBtnAvailable] = useState(true);
  const [firstMessage, setFirstMessage] = useState(true);
  const [isLoad, setIsLoad] = useState(null);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "you are a chatbot. your name is cosmos. (speak in simple english)",
    },
    {
      role: "assistant",
      content: "Hi there, User can i help you with anything?",
    },
  ]);
  const chatContainerRef = useRef(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <>
      <div className="h-screen w-full bg-black parent flex flex-col">
        <Navbar />
        <Chats
          state={[messages, setMessages]}
          firstMessage={firstMessage}
          isLoad={isLoad}
          chatContainerRef={chatContainerRef}
        />
        <Input
          state={[messages, setMessages]}
          setFirstMessage={setFirstMessage}
          setIsLoad={setIsLoad}
          btnState={[btnAvailable, setBtnAvailable]}
        />
      </div>
    </>
  );
}

export default App;
