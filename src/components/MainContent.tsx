import { Anime } from '../@type/anime.type'

import { FormEventHandler } from 'react'
import { AnimeCard } from './AnimeCard'

export const MainContent = ({
  HandleSearch,
  search,
  animeList,
  setSearch,
}: {
  HandleSearch: FormEventHandler
  search: string
  animeList: Anime[]
  setSearch: Function
}) => {
  return (
    <main>
      <div className='main-head'>
        <form className='search-box' onSubmit={HandleSearch}>
          <input
            type='search'
            placeholder='Search for an anime...'
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className='anime-list'>
        {animeList.map((anime: Anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  )
}
