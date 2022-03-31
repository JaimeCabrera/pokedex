import {useEffect, useState} from 'react';

export const useDibouncedValue = (input: string = '', time: number = 500) => {
  const [debounceValue, setDebounceValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(input);
    }, time);
    return () => {
      // esto llama a la funcion anterio de useefe
      clearTimeout(timeout);
    };
  }, [input]);

  return debounceValue;
};
