export function formatPrice(amount: number, { showZeroAsNumber = false } = {}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    minimumFractionDigits: 2,
  });

  if (amount === 0 && !showZeroAsNumber) return 'Free';
  return formatter.format(amount);
}
