import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(prevPending => prevPending + 1); // Update pending using the previous state
    await delay(3000);
    setPending(prevPending => prevPending - 1); // Update pending using the previous state
    setCompleted(prevCompleted => prevCompleted + 1); // Update completed using the previous state
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
