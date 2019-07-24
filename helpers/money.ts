const formatCents = (centAmount: number, currencyCode: string) => {
  return Number(centAmount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: currencyCode
  });
}

export {
  formatCents,
};