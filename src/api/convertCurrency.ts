export interface Currency {
  new_amount: number;
  new_currency: string;
  old_amount: number;
  old_currency: string;
}
async function fetchCurrency(
  amount: string,
  oldCurrency: string,
  newCurrency: string
) {
  const req = await fetch(
    `https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=${oldCurrency}&amount=${amount}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "a83ab2ea79b529c406016ddd19fc7672",
      },
    }
  );

  const data: Currency = await req.json();

  return data;
}

export default fetchCurrency;
