import Image from "next/image";
// import MenuBar from "./components/Menubar";
import AppBar from "./components/Menubar";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <>
      <AppBar />
      <HomePage />
    </>
  );
}
