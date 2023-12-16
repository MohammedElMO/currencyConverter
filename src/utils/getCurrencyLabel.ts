import { fromCurrency, toCurrency } from "../elements/selectedFromDOM";

export function getCurrencyType() {
  if (
    fromCurrency.innerText !== "Currency" &&
    toCurrency.innerText !== "Currency"
  ) {
    return {
      have: fromCurrency.innerText,
      want: toCurrency.innerText,
    };
  }
  return {
    have: "",
    want: "",
  };
}
