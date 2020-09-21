import { useState, useEffect } from 'react';

const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {

  // const mediaQueryList = queries.map(q => window.matchMedia(q));
  // const getValue = () => {
  //   const index = mediaQueryList.findIndex(ql => ql.matches);
  //   return values?.[index] || defaultValue;
  // };

  // const [value, setValue] = useState<T>(getValue);

  // useEffect(() => {
  //   const handler = () => setValue(getValue);
  //   mediaQueryList.forEach(ql => ql.addListener(handler));

  //   return () => mediaQueryList.forEach(ql => ql.removeListener(handler));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // return value;
  const match = () => {
    const query = queries.findIndex(q => matchMedia(q).matches);
    return values[query] || defaultValue;
  }
  const [value, setValue] = useState<T>(match);

  useEffect(() => {
    const handler = () => setValue(match);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return value;
}

export default useMedia;
