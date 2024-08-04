const currencyArray = [
  { inr: { usd: 0.5, inr: 1, eu: 3 } },
  { usd: { inr: 2, usd: 1, eu: 3 } },
  { eu: { inr: 2, usd: 3, eu: 1 } },
];

const getCurrencies = (currency) => {
  return currencyArray.find((currencyObj) => currency in currencyObj) || {};
};

export { getCurrencies };
