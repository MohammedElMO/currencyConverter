
export interface Currency {
  new_amount:number
new_currency:string
old_amount:number
old_currency:string
}
async function fetchCurrency(amount:string,oldCurrency:string,newCurrency:string){

    const req = await  fetch(`https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=${oldCurrency}&amount=${amount}`, 
    {
      method: 'GET',
      headers: { 
        'X-Api-Key': 'AQfXpA2nDShxF9APvQGlZ9LSo83sa81LQHGj3mx4',
      },
    }
   )

  const data = await req.json()

return data
} 

export default fetchCurrency
