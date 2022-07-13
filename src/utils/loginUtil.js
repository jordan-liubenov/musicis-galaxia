export const handleValue = (e, setValue) => {
  const { id, value } = e.target;

  setValue(value);
};
