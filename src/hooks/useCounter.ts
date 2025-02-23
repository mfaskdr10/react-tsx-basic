import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return {
    count,
    handleDecrement,
    handleIncrement,
    handleResetCounter,
  };
};