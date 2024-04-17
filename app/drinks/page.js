import DrinksList from "@/components/DrinksList"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async () => {
  const res = await fetch(url)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data
}


const Drinks = async () => {
  const data = await fetchDrinks()
  // console.log(data)
  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  )
}

export default Drinks