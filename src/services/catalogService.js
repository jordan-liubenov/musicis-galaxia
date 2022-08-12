export const fetchAllOffers = () => {
  //fetches all entries of offers in the DB which will later be filtered upon catalog selection
  const url = "http://localhost:5000/fetch/all";

  return fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const fetchEntryById = (id) => {
  //fetches specific entry based on it's id (used for details view)
  const url = "http://localhost:5000/fetch/specific";

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  }).then((res) => res.json());
};
