import React, { useState } from "react";
import Button from "../components/Button";

const Home = () => {
  const [bgColor, setBgColor] = useState("bg-zinc-800");
  return (
    <>
      <div className={`w-full h-screen relative flex items-center justify-center ${bgColor}`}>
        <h2 className="text-4xl font-extrabold">Background Changer</h2>
        <div className="absolute bottom-10 inset-x-0 flex justify-center">
          <div className="bg-white shadow-3xl rounded-xl p-2 flex items-center gap-2">
            <button onClick={() => setBgColor('bg-red-700')} className="px-4 py-2 bg-red-700 rounded-lg text-white outline-none">Red</button>
            <button onClick={() => setBgColor('bg-blue-700')} className="px-4 py-2 bg-blue-700 rounded-lg text-white outline-none">Blue</button>
            <button onClick={() => setBgColor('bg-green-700')} className="px-4 py-2 bg-green-700 rounded-lg text-white outline-none">green</button>
            <button onClick={() => setBgColor('bg-zinc-700')} className="px-4 py-2 bg-zinc-700 rounded-lg text-white outline-none">zinc</button>
            <button onClick={() => setBgColor('bg-orange-700')} className="px-4 py-2 bg-orange-700 rounded-lg text-white outline-none">orange</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
