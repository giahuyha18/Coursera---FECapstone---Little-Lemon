import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmitCusInfo = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random()*10;
    setLoading(true);
    setResponse({
      type: 'success',
      message: `Thank you for reserving your table ${data.reservationName}!\nYour confirmation number is: #${random}`,
    })
  };

  return { isLoading, response, submit };
}

export default useSubmitCusInfo;