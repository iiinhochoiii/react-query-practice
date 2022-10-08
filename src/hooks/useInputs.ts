import { useState, useCallback, ChangeEvent } from 'react';

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue);

  const onChnage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, onChnage, setValue] as [string, onChangeType, typeof setValue];
};

export default useInput;
