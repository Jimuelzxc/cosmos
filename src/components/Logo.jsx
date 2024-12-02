import logo from "../assets/logo.png";
export default function Logo({ type, className }) {
  return type === "text" ? (
    <h1 className="logo">cosmos</h1>
  ) : (
    <img src={logo} className={`mx-auto ${className}`}/>
  );
}
