export const LoveCounter = (relationshipDate) => {
  const now = new Date();

  let years = now.getFullYear() - relationshipDate.getFullYear();
  let months = now.getMonth() - relationshipDate.getMonth();
  let days = now.getDate() - relationshipDate.getDate();
  let hours = now.getHours() - relationshipDate.getHours();

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const previousMonthDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();

    days += previousMonthDays;
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours };
};