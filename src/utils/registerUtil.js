export const infoStatus = (info, showInfo) => {
  if (info) showInfo(false);
  if (!info) showInfo(true);
};
