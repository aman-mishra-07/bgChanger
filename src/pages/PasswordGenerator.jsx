import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("password");
  const [passLength, setPassLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (specialCharAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passLength, numberAllowed, specialCharAllowed, setPassword]);

  const copyPassToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword();
  }, [passLength, numberAllowed, specialCharAllowed, generatePassword]);

  return (
    <>
      <div className="min-h-screen bg-slate-300 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-gradient-to-t from-zinc-700 to-zinc-500 text-white rounded-md p-4 shadow-xl space-y-4">
          <h1 className="text-2xl font-semibold text-center">
            Password Generator
          </h1>
          <div className="flex items-center border-collapse">
            <input
              type="text"
              className="p-2 border rounded-l-md bg-transparent outline-none w-full"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button
              onClick={copyPassToClipBoard}
              type="button"
              className="p-2 rounded-r-md border bg-blue-700 hover:bg-blue-600 duration-200"
            >
              Copy
            </button>
          </div>
          <div className=" flex items-center gap-8 justify-between">
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={8}
                max={32}
                id="passLength"
                onChange={(e) => setPassLength(e.target.value)}
              />
              <label htmlFor="passLength">Length : {passLength}</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="numberAllowed"
                onChange={(e) => setNumberAllowed(!numberAllowed)}
              />
              <label htmlFor="numberAllowed">Number Allowed</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="specialCharAllowed"
                onChange={() => setSpecialCharAllowed(!specialCharAllowed)}
              />
              <label htmlFor="specialCharAllowed">Number Allowed</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
