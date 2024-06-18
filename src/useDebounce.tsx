import { useEffect, useState } from "react";

export const useDebounce = (searchVal, dealy = 300) => {
  const [debounceVal, setDebouceVal] = useState(searchVal);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouceVal(searchVal);
    }, dealy);

    return () => {
      clearTimeout(timer);
    };
  }, [searchVal, dealy]);

  return debounceVal;
};
