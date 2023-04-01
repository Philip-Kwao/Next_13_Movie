import Image from "next/image"
import Link from "next/link"

export default async function Pop({params}){
    const {popular} = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${popular}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    console.log(res)
    const image_url = "https://image.tmdb.org/t/p/original"

    return(
        <div className="flex flex-col">
                <h1 className="text-xl pt-5 font-black flex items-center justify-center">{res.title}</h1>
            <div className="flex justify-between py-3 px-5 items-center">
                <h3 className="font-bold bg-green-700 py-3 px-5 rounded-md">{res.tagline}</h3>
                <h3 className="text-sm">{res.release_date}</h3>
                <p className="text-sm">Time: {res.runtime} mins</p>
            </div>
            <div className="flex flex-row justify-center items-center flex-wrap px-5">
                <Image src={image_url+res.backdrop_path} width={1000} height={1000} alt="img" priority />
                <div className="py-30 px-30 mx-5 my-5 max-w-[900px]">
                    <p>{res.overview}</p>    
                </div>
            </div>

            <Link href={`/`} className="text-xl pt-5 font-black flex items-center justify-center text-green-500 hover:text-black" >
                <div >Go Back</div>
            </Link>
        </div>

    )

    /**
     * 
     production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
        release_date: '2022-12-14',
        revenue: 2309660236,
        runtime: 192,
        spoken_languages: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
        status: 'Released',
        tagline: 'Return to Pandora.',
        title: 'Avatar: The Way of Water',
        video: false,
        vote_average: 7.739,
        vote_count: 6227
     */

}