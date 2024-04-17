import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink} className="shadow-md rounded-md overflow-hidden">
          <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium block">
            <div className="relative h-48 w-full">
              <Image
                src={drink.strDrinkThumb}
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                alt={drink.strDrink}
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
