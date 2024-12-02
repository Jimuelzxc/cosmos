import { BiSolidSend } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useRef } from "react";
import sound from "../assets/done.wav";
import axios from "axios";
export default function input({ state, setFirstMessage, setIsLoad, btnState }) {
  const [btnAvailable, setBtnAvailable] = btnState;
  const [messages, setMessages] = state;
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function handleChats() {
    if (btnAvailable) {
      const newMessage = [...messages, { role: "user", content: inputValue }];
      setMessages(newMessage);
      setInputValue("");
      inputRef.current.focus();
      setFirstMessage(false);
      setIsLoad(true);
      setBtnAvailable(false);

      try {
        const response = await axios.post(
          "https://api.pawan.krd/cosmosrp/v1",
          {
            model: "cosmosrp",
            messages: newMessage,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = response.data.choices[0].message.content;
        setMessages([...newMessage, { role: "assistant", content: data }]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoad(false);
        setBtnAvailable(true);
        let audio = document.createElement("audio");
        audio.src = sound;
        audio.play();
      }
    }
  }
  return (
    <div className="mx-[0px] lg:mx-[450px] px-[20px] py-[30px]">
      <div className="border border-secondary-250 flex flex-row rounded-full p-2 px-[20px] bg-secondary-100 opacity-80">
        <input
          type="text"
          className="grow text-white text-[1em] px-2 font-thin"
          placeholder="Ask cosmos"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleChats() : null)}
        />
        <div
          className="bg-primary rounded-full cursor-pointer translate-x-2"
          onClick={handleChats}
        >
          <BiSolidSend className="text-[1.3em] m-2 text-white" />
        </div>
      </div>
      <div className="py-3">
        <p className="text-center text-secondary-300 text-[0.7em]">
          cosmos ready to answer your question or anything.
        </p>
      </div>
    </div>
  );
}
