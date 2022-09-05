export type Anime = {
  mal_id: number
  rank: number
  title: string
  airing?: boolean
  synopsis?: string
  url: string
  image_url: string
  type: string
  episodes: number
  start_date: string
  end_date: string
  members: number
  score: number
}

export type AnimeRequest = {
  request_hash: string
  request_cached: boolean
  request_cache_expiry: number
  API_DEPRECATION: boolean
  API_DEPRECATION_DATE: string
  API_DEPRECATION_INFO: string
  results: Anime[]
}

export type AnimeTopRequest = {
  request_hash: string
  request_cached: boolean
  request_cache_expiry: number
  API_DEPRECATION: boolean
  API_DEPRECATION_DATE: string
  API_DEPRECATION_INFO: string
  top: Anime[]
}