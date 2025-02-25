import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";

export default function DarkMode() {
  const [use, setUse] = useState(false);
 function dark() {
    setUse(!use);
    document.body.classList.toggle("dark");
  };
  return (
    <article>
      <button className="hover:bg-secondary hover:text-primary size-8 flex p-2 text-primary"
      onClick={dark}>
        {use? <IoSunnyOutline /> : <FaMoon />}
      </button>
    </article>
  );
}
