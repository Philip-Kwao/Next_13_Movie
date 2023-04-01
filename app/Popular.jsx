import Image from "next/image";
import Link from "next/link";

export default function Popular({title,poster_path, release_date, id, vote_average}){
    const image_url = "https://image.tmdb.org/t/p/original"
    return(
        <div>
            <h1 className="font-bold">{title}</h1>
            <h2>{release_date}</h2>
            <h4>Vote Average: {vote_average}</h4>
            <Link href={`/${id}`}>
                <Image src={image_url+poster_path} width={300} height={300} alt="img"/>
            </Link>
        </div>
    );
}

/**
 *    {
      adult: false,
      backdrop_path: '/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg',
      genre_ids: [Array],
      id: 646389,
      original_language: 'en',
      original_title: 'Plane',
      overview: 'After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.',
      popularity: 893.896,
      poster_path: '/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg',
      release_date: '2023-01-12',
      title: 'Plane',
      video: false,
      vote_average: 6.9,
      vote_count: 987
    },
 */