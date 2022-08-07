export const trimIdFromUrl = (url) => {
  return url.pathname.split("/details/")[1];
};

export const trimIdFromEdit = (url) => {
  return url.pathname.split("/edit/")[1];
};

export const formatConditionString = (str) => {
  let newStr = str.charAt(0).toUpperCase();
  newStr = newStr + str.substring(1, str.length);
  return newStr;
};
