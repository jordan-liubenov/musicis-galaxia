export const submitRegister = async (e, email, username, password, rePass) => {
  try {
    const req = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const res = await req.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// useEffect(() => {  request testing
//   fetch(`http://localhost:5000`)
//     .then((res) => res.text())
//     .then((result) => {
//       console.log(result);
//     });
// }, []);
