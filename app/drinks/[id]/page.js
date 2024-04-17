import Image from "next/image"
import Link from "next/link"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const fetchDrink = async (id) => {
    const res = await fetch(`${url}${id}`)
    
    if (!res.ok) {
        throw new Error('Failed to fetch a drink...')
    }
    const data = await res.json()
    return data
    
}

const SingleDrinkPage = async ({params}) => {
    const data = await fetchDrink(params.id)
    const title = data?.drinks[0]?.strDrink
    const imgSrc = data?.drinks[0]?.strDrinkThumb
    return (
    <div>
        <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
            back to drinks
        </Link>
        <h1 className="text-3xl font-semibold mb-8">{title}</h1>
        <Image 
            src={imgSrc} 
            alt={title} 
            width={300} 
            height={300} 
            className="w-48 h-48 rounded-lg shadow-lg mb-4" 
            priority
        />
        <p>{data?.drinks[0]?.strInstructions}</p>
    </div>
  )
}

export default SingleDrinkPage