import "./style.css";
import fetchCurrency, { Currency } from "./api/convertCurrency";
import { getCurrencyType } from "./utils/getCurrencyLabel";
import { form, outputText } from "./elements/selectedFromDOM";
import { currencyTemplate } from "./utils/template/currencyTemplate";



currencyTemplate()

form?.addEventListener("submit", async(e) => {
  e.preventDefault()

  const data = new FormData(form)
  const amount = data.get("amount")?.toString()
  if(!amount) return
const {have, want} = getCurrencyType()
outputText.innerText = "Exchanging rate in upInRunning..."

  const currencyData :Currency = await fetchCurrency(amount,have,want)
outputText.innerText = ` ${currencyData.old_amount} ${currencyData.old_currency}  = ${currencyData.new_amount} ${currencyData.new_currency}`
})


