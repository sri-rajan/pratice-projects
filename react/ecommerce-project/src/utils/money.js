function formateMoney(amountCents) {
  return `$${(amountCents / 100).toFixed(2)}`;
}

export { formateMoney };
