export const fetchAllOffers = () => {
  //fetches all entries of offers in the DB which will later be filtered upon catalog selection
  const url = "http://localhost:5000/fetch/all";

  return fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

// export const fetchAllInstruments = () => {
//   //fetches only all of the Instrument offers in the DB
//   const url = "http://localhost:5000/allInstruments";

// };

// export const fetchAllAmps = () => {
//   //fetches only all of the Amplifier offers in the DB
//   const url = "http://localhost:5000/allAmplifiers";
// };

// export const fetchAllOther = () => {
//   //fetches only all of the Other offers in the DB
//   const url = "http://localhost:5000/allOther";
// };
