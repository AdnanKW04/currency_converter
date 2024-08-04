import { useEffect, useState } from "react";
import { getCurrencies } from "../constant/currency";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const currencyData = getCurrencies(currency);
    if (!currencyData) setData({});
    setData(currencyData[currency]);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
