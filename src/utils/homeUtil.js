export const displayUnderscore = (underscore, setUnderscore) => {
  setTimeout(() => {
    if (underscore) {
      setUnderscore(false);
    } else {
      setUnderscore(true);
    }
  }, 800);
};
export const redirectHome = (navigator) => {
  navigator("/");
};
