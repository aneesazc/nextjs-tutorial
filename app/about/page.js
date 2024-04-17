import Link from "next/link"


const About = () => {
    return (
        <div>
            <h1 className="text-5xl">About page</h1>
            <Link href="/" className="text-2xl">
                Home page
            </Link>
        </div>
    )
}

export default About