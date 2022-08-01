const { useState } = require("react");

//custom hook used for persisting user data after successful log-in
export const useLocalStorage = (lsKey, defVal) => {
  const [val, setVal] = useState(defVal);

  const saveToLS = (newVal) => {
    //adds data to local storage with the passed key and value
    localStorage.setItem(lsKey, JSON.stringify(newVal));
    setVal(newVal);
  };

  return [val, saveToLS];
};
