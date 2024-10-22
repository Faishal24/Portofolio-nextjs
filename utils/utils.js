export const generateRandomCombination = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const combinationLength = Math.floor(Math.random() * 5) + 2;
  let combination = "";

  for (let i = 0; i < combinationLength; i++) {
    combination += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return combination;
};

export const formatDate = (date) => {
  const slicing = date.toDate().toDateString().slice(4, 16);
  const day = slicing.slice(4, 6);
  const month = slicing.slice(0, 3);
  const year = slicing.slice(7, 11);
  return `${day} ${month} ${year}`;
};
