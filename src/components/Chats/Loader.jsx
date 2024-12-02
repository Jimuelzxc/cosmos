export default function Loader() {
  return (
    <div className="loader flex flex-col gap-2">
      <div className="load-bar w-[80%] h-5 bg-secondary-200"></div>
      <div className="load-bar w-[75%] h-5 bg-secondary-200"></div>
      <div className="load-bar w-[60%] h-5 bg-secondary-200"></div>
    </div>
  );
}
