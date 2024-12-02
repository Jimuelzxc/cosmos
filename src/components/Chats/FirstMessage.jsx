import { BiSolidBookAlt, BiQuestionMark } from "react-icons/bi";

export default function FirstMessage() {
  return (
    <div className={`m-auto text-white flex flex-col gap-3`}>
      <h2 className="text-center text-secondary-300">Hi there, User</h2>
      <h1 className="text-center">Can i help you with</h1>
      <div className="flex flex-row justify-center mt-10 gap-5">
        <PromptTemplate icon={<BiSolidBookAlt />} text="Summarize book" />
        <PromptTemplate icon={<BiQuestionMark />} text="How to anything" />
      </div>
    </div>
  );
}
function PromptTemplate({ icon, text }) {
  return (
    <div className="cursor-pointer bg-secondary-100 p-2 px-3 rounded-md flex flex-row items-center gap-2 border border-secondary-200 text-[0.8em] opacity-90">
      {icon}
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
}
