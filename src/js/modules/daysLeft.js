import dayjs from "dayjs";

export default () => {
  const endDate = dayjs('2022-04-23');
  const startDate = dayjs();
  const daysLeft = document.querySelector(".js-days-left");

  if (!daysLeft) return;

  let days = startDate.diff(endDate, 'day');

  daysLeft.innerHTML = days.toString().substr(1);
};
