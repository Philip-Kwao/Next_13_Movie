import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Popular from './Popular'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  return (
    <div className="grid gap-16 grid-cols-fluid">
      {res.results.map((popular) => (
        <Popular 
          key={popular.id}
          title={popular.title}
          poster_path = {popular.poster_path} 
          release_date={popular.release_date}
          vote_average={popular.vote_average}
          id={popular.id}
        />
      ))}
    </div>
  )
}
