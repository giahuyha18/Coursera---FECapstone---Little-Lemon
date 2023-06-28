import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [isTableFormDone, setTableFormDone] = useState(false);

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setTableFormDone(true)
      setResponse({
        type: 'success',
        message: `Your Table is Available to be reserved. Please proceed to enter your contact information!`,
      })
    } catch (error) {
      setTableFormDone(false)
      setResponse({
        type: 'error',
        message: 'Unfortunately, table is not available! Please select another day!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, isTableFormDone, submit };
}

export default useSubmit;