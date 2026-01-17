document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.querySelector(".time");
  if (!timeEl) return;

  function ordinal(day) {
    if (day % 10 === 1 && day % 100 !== 11) return "st";
    if (day % 10 === 2 && day % 100 !== 12) return "nd";
    if (day % 10 === 3 && day % 100 !== 13) return "rd";
    return "th";
  }

  function formatDate(d) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    let hour = d.getHours();
    const minute = String(d.getMinutes()).padStart(2, "0");
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${month} ${day}${ordinal(day)} ${year}, ${hour}:${minute}${ampm}`;
  }

  function updateTime() {
    timeEl.textContent = formatDate(new Date());
  }

  updateTime();
  setInterval(updateTime, 1000);
});
