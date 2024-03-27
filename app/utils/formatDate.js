// Turns date into 2 parts: date and time
// ex. dateString = "2024-03-25T15:00"
//     returns: date: Mar 25, 2024
//              time: 3:00 PM
export function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return `${formattedDate} at ${formattedTime}`;
}
