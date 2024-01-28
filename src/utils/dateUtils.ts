import moment from "moment";

const formatDateTime = (dateTimeString: string) => {
  const formattedDateTime = moment(dateTimeString)?.format(
    "ddd, MMM DD | h:mm A"
  );
  return formattedDateTime;
};

const reverseFormatDateTime = (formattedDateTime: string) => {
  const parsedDateTime = moment(formattedDateTime, "ddd, MMM DD | h:mm A");

  return parsedDateTime.isValid()
    ? parsedDateTime.format("YYYY-MM-DDTHH:mm")
    : null;
};

export { formatDateTime, reverseFormatDateTime };
