const dateFormat = (createDate: string) => {
  const date = new Date(createDate);

  let month: string | number = date.getMonth() + 1;
  let day: string | number = date.getDate();
  let hour: string | number = date.getHours();
  let minute: string | number = date.getMinutes();
  let second: string | number = date.getSeconds();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;
  minute = minute >= 10 ? minute : "0" + minute;
  second = second >= 10 ? second : "0" + second;

  return (
    date.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second
  );
};

export default dateFormat;
