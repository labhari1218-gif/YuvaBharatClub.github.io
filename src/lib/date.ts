const longFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric"
});

export const formatDate = (date: Date) => longFormatter.format(date);

export const formatDateRange = (startDate: Date, endDate?: Date) => {
  if (!endDate) return formatDate(startDate);
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};
