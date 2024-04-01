export const formatDate = (date?: Date) => {
  if (date) {
    const tempDate = new Date(date);
    const year = tempDate.getFullYear().toString().substring(2);
    const month = (tempDate.getMonth() + 1).toString().padStart(2, "0");
    const day = tempDate.getDate().toString().padStart(2, "0");

    return `${year}/${month}/${day}`;
  }
};
