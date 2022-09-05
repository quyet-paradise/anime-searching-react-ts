import { Anime } from '../@type/anime.type'

export const Sidebar = ({ topAnime }: { topAnime: Anime[] }) => {
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime: Anime) => (
          <a
            href={anime.url}
            target='_blank'
            rel='noreferrer'
            key={anime.mal_id}
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  )
}
