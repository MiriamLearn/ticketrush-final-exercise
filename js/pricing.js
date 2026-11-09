// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה

function maxTickets(isMember) {
  return isMember ? 4 : MAX_TICKETS;
}

function calcTotal(qty, isMember) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) return null;
  const ticketPrice = isMember ? TICKET_PRICE * 0.8 : TICKET_PRICE;
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, maxTickets, calcTotal };
}
