import { Anime, AnimeRequest, AnimeTopRequest } from './@type/anime.type'

import { useState, useEffect, FormEvent } from 'react'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'

export const App = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([])
  const [topAnime, setTopAnime] = useState<Anime[]>([])
  const [search, setSearch] = useState<string>('')

  const GetTopAnime = async () => {
    const temp: AnimeTopRequest = await fetch(
      'https://api.jikan.moe/v3/top/anime/1/bypopularity'
    ).then((res: Response) => res.json())

    setTopAnime(temp.top.slice(0, 10))
  }

  const FetchAnime = async (query: string) => {
    const temp: AnimeRequest = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc`
    ).then((res: Response) => res.json())

    setAnimeList(temp.results)
  }

  const HandleSearch = (e: FormEvent) => {
    e.preventDefault()

    FetchAnime(search)
  }

  useEffect(() => {
    GetTopAnime()
  }, [])

  return (
    <div className='app'>
      <Header />
      <div className='content-wrap'>
        <Sidebar topAnime={topAnime} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          animeList={animeList}
          setSearch={setSearch}
        />
      </div>
    </div>
  )
}
