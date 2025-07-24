function calculateDate() {
  const startInputVal = document.getElementById("start-date").value;
  const endInput = document.getElementById("end-date");

  if (!startInputVal) return;

  const startDate = new Date(startInputVal);
  startDate.setDate(startDate.getDate() + 90);

  const year = startDate.getFullYear();
  const month = String(startDate.getMonth() + 1).padStart(2, "0");
  const day = String(startDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  endInput.value = formattedDate;
  endInput.max = formattedDate;
  endInput.min = startInputVal;
}

const startInput = document.getElementById("start-date");

startInput.onkeydown = function (event) {
  if (event.key === "Tab") {
    calculateDate();
  }
};
