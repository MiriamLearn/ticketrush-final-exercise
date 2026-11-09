const { joinWaitlist } = require('../js/waitlist');

test('adds a trimmed lowercase email without changing the input', function () {
  const list = ['first@example.com'];
  const result = joinWaitlist(list, '  NEW@Example.com  ');
  assertEq(result.join(','), 'first@example.com,new@example.com');
  assertEq(list.join(','), 'first@example.com');
  if (result === list) throw new Error('expected a new array');
});

test('does not add invalid or duplicate emails', function () {
  const list = ['first@example.com'];
  assertEq(joinWaitlist(list, 'invalid').join(','), 'first@example.com');
  assertEq(joinWaitlist(list, 'name@domain').join(','), 'first@example.com');
  assertEq(joinWaitlist(list, ' FIRST@EXAMPLE.COM ').join(','), 'first@example.com');
});