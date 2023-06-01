
import dataCurrency from "../../assets/currency/country-list";
import { selectNode } from "../setCurrencyLabel";
import { currencyLabelIn, currencyLabelOut, fromCurrency, toCurrency } from "../../elements/selectedFromDOM";


export function currencyTemplate() {
    //displaying currency menu 
  
    const menu = document.createElement("div")
    menu.classList.add("menu")
    Object.entries(dataCurrency).forEach(curr => {
    const menuItem:HTMLSpanElement = document.createElement("span")
      menuItem.innerText = curr[0]
      menu.append(menuItem)
    })
  
    menu.classList.add("pop")
  
    
    const menuIn = <HTMLDivElement> menu.cloneNode(true)
    
    fromCurrency.addEventListener("click",() => {
      fromCurrency.append(menuIn)
      menuIn.classList.toggle("pop")
  
      selectNode(menuIn,currencyLabelIn)
    })
    toCurrency.addEventListener("click",() => {
      toCurrency.append(menu)
      const menuOut = <HTMLDivElement>toCurrency.querySelector(".menu")
      menu.classList.toggle("pop")
      selectNode(menuOut,currencyLabelOut)
     
    })
    window.addEventListener("click",(e) => {
      if(e.offsetY > toCurrency.clientHeight || e.offsetY > fromCurrency.clientHeight)
          menu.classList.add("pop")
    })
  }
  
  