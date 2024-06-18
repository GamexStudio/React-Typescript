import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import "./styles.css";

export default function App() {
  const [searchVal, setSearchValue] = useState("");
  const debounceVal = useDebounce(searchVal);

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    console.log("debounceVal", debounceVal);
  }, [searchVal]);
  return (
    <div className="App">
      <input value={searchVal} onChange={handleSearch} />
    </div>
  );
}
