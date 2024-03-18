const formatReadableDate = (
  isoDateString: string,
  includeTime: boolean = false
): string => {
  const date = new Date(isoDateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  if (includeTime) {
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
  }

  return date.toLocaleString("ko-KR", options);
};

export default formatReadableDate;
