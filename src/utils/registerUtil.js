export const toggleState = (state, stateFunc) => {
  stateFunc((state) => !state); //take the current value of state and set is as its opossite
};

export const setValue = (e, setFunc) => {
  const { id, value } = e.target;

  setFunc(value);
};

export const submitRegister = async (e, email, username, password, rePass) => {
  try {
    const req = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};
