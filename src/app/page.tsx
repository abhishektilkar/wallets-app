import Image from "next/image";
// import MenuBar from "./components/Menubar";
import AppBar from "./components/Menubar";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div className="bg-black">
      <AppBar />
      <div className="bg-purple-500 text-blue-500">
        a
      </div>
      <HomePage />
    </div>
  );
}
