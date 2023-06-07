import { useEffect, useRef } from "react";

export const useRafCounter = (callback: Function) => {
  // Use useRef for mutating variables we want to persist
  // without  triggering rerender on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();

  // Request Animation Frame (what handles time updates)
  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      // @ts-ignore
      const deltaTime = time - previousTimeRef.current;

      // Pass a function to the setter of the state
      // so we always have latest state
      callback(deltaTime);
    }

    // @ts-ignore
    previousTimeRef.current = time;
    // @ts-ignore
    requestRef.current = requestAnimationFrame(animate);
  };

  // Initialization
  useEffect(() => {
    // @ts-ignore
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // run once
};
