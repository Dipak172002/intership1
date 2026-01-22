import { useState } from "react";

export default function Setting() {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState("");

  return (
    <div className="pt-45 min-h-screen justify-center flex-col item-centeritem-center min-w-screen px-6">
      <h1 className="text-2xl font-bold mb-6 text-center ">⚙️ Settings</h1>

      <div className="max-w-sm space-y-4">
        <div>
          <label className="block font-semibold">Email</label>
          <input
            value={email}
            placeholder="drsonawane@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border p-2 w-full rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Settings
        </button>
      </div>
    </div>
  );
}
