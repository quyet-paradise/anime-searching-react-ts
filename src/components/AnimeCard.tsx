import { Anime } from '../@type/anime.type'

export const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
    <article className='anime-card'>
      <a href={anime.url} target='_blank' rel='noreferrer'>
        <figure>
          <img src={anime.image_url} alt='Anime Image' />
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  )
}
