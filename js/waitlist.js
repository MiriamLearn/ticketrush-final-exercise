function joinWaitlist(list, email) {
  if (typeof email !== 'string') return list.slice();

  const normalizedEmail = email.trim().toLowerCase();
  const validEmail = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(normalizedEmail);
  if (!validEmail) return list.slice();

  const alreadyJoined = list.some(function (item) {
    return typeof item === 'string' && item.trim().toLowerCase() === normalizedEmail;
  });
  return alreadyJoined ? list.slice() : list.concat(normalizedEmail);
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}