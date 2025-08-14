import { BiSolidSend } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useRef } from "react";
import sound from "../assets/done.wav";
import axios from "axios";

export default function Input({
  state,
  setFirstMessage,
  setIsLoad,
  btnState,
  model,
  apiKey,
}) {
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
        let response;
        switch (model) {
          case "cosmos":
            response = await axios.post(
              "https://api.pawan.krd/cosmosrp/v1",
              {
                model: "cosmosrp",
                messages: newMessage,
              },
              {
                headers: { "Content-Type": "application/json" },
              }
            );
            break;
          case "openrouter":
            response = await axios.post(
              "https://openrouter.ai/api/v1/chat/completions",
              {
                model: "gryphe/mythomax-l2-13b",
                messages: newMessage,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${apiKey}`,
                },
              }
            );
            break;
          case "gemini":
            response = await axios.post(
              "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
              {
                contents: newMessage
                  .slice(1)
                  .map(({ role: a, content: b, ...rest }) => ({
                    role: a == "assistant" ? "model" : "user",
                    parts: [{ text: b }],
                  })),
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
                params: {
                  key: apiKey,
                },
              }
            );
            break;
          default:
            throw new Error("Invalid model selected");
        }

        const data =
          model == "gemini"
            ? response.data.candidates[0].content.parts[0].text
            : response.data.choices[0].message.content;
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
