import { useState, useCallback } from "react";
import { getGrid } from "./utils";

function App() {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const logGetBalance = useCallback(() => {
    setLoading(true);
    getGrid(mnemonic)
      .then((grid) => grid.balance.getMyBalance())
      .then(console.log)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [mnemonic]);

  return (
    <div>
      <p>grid3_client with ts-react and vite</p>

      <div>
        <label>
          Mnemonic:
          <input
            autoFocus
            type="text"
            value={mnemonic}
            placeholder="mnemonic"
            disabled={loading}
            onInput={(e) => setMnemonic((e.target as HTMLInputElement).value)}
          />
        </label>
      </div>

      <br />

      <button
        disabled={mnemonic.length === 0 || loading}
        onClick={logGetBalance}
      >
        Log My balance to console
      </button>
    </div>
  );
}

export default App;
