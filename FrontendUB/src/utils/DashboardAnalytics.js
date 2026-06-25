
// Weekly aggregation
export function getWeeklyRevenue(orders) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const revenueMap = {
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
  };

  orders.forEach(order => {
    if (order.orderStatus !== 'Completed') return;

    const date = new Date(order.createdAt);
    const dayName = days[date.getDay()];

    revenueMap[dayName] += order.orderTotal;
  });

  return Object.entries(revenueMap).map(([label, revenue]) => ({
    label,
    revenue
  }));
}

// Monthly Aggregation
export function getMonthlyRevenue(orders) {
  const revenueMap = {};

  const today = new Date();

  orders.forEach(order => {
    if (order.orderStatus !== 'Completed') return;

    const date = new Date(order.createdAt);

    if (
      date.getMonth() !== today.getMonth() ||
      date.getFullYear() !== today.getFullYear()
    ) {
      return;
    }

    const day = date.getDate();

    revenueMap[day] = (revenueMap[day] || 0) + order.orderTotal;
  });

  return Object.entries(revenueMap).map(([label, revenue]) => ({
    label,
    revenue
  }));
}

// Yearly aggregation
export function getYearlyRevenue(orders) {
  const months = [
    'Jan','Feb','Mar','Apr',
    'May','Jun','Jul','Aug',
    'Sep','Oct','Nov','Dec'
  ];

  const revenueMap = {};

  months.forEach(month => {
    revenueMap[month] = 0;
  });

  orders.forEach(order => {
    if (order.orderStatus !== 'Completed') return;

    const date = new Date(order.createdAt);

    const monthName = months[date.getMonth()];

    revenueMap[monthName] += order.orderTotal;
  });

  return Object.entries(revenueMap).map(([label, revenue]) => ({
    label,
    revenue
  }));
}