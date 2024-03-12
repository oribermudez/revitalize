// Pass date string from DB to format into date and time
// "2024-03-25T15:00"
//    date: Mar 25, 2024
//    time: 3:00 PM
export function formatDate(dateString) {
  const date = new Date(dateString);
  return {
    date: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  };
}
