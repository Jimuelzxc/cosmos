import Logo from "./Logo";

export default function Navbar({ modelState, keyState }) {
  const [selectedModel, setSelectedModel] = modelState;
  const [apiKey, setApiKey] = keyState;

  return (
    <div className="py-[20px] border-b border-secondary-100 flex justify-between items-center px-4">
      <Logo type="text" />
      <div className="flex items-center space-x-4">
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="bg-secondary-100 text-white p-2 rounded-md"
        >
          <option value="cosmos">Cosmos</option>
          <option value="openrouter">OpenRouter</option>
          <option value="gemini">Gemini</option>
        </select>
        <input
          type="password"
          placeholder="API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="bg-secondary-100 text-white p-2 rounded-md"
        />
      </div>
    </div>
  );
}
