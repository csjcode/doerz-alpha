export function formatUSD(number: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // Optional: Use this if you want to control the number of decimal places
    // minimumFractionDigits: 2,
    // maximumFractionDigits: 2,
  }).format(number);
}
