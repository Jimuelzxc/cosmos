import User from "./User";
import Bot from "./Bot";
import Loader from "./Loader";
import FirstMessage from "./FirstMessage";

export default function Chats({ state, firstMessage, isLoad, chatContainerRef}) {
  const [messages, setMessages] = state;
  return (
    <div ref={chatContainerRef} className="mx-[0px] lg:mx-[450px] px-[20px] py-[30px] grow flex flex-col gap-[40px] overflow-y-scroll chat-container">
      {messages.map((message, index) => {
        if(message.role !== "system" && index !== 1){
          return message.role === "user" ? <User content={message.content}/>: <Bot content={message.content} />
        }
      })}
      {firstMessage ? <FirstMessage />: null}
      {isLoad ? <Loader /> : null}
    </div>

  );
}
