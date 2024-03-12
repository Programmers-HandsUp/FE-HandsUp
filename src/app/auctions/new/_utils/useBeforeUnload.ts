import { useEffect, useState } from "react";

const useBeforeUnload = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (active) {
        event.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [active]);

  return setActive;
};

export default useBeforeUnload;
