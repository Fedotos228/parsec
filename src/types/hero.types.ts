export interface IHeroVideos {
  id: number
  poster: string
  video: IVideo[]
  title: string
}

export interface IVideo {
  type: string,
  url: string
  poster?: string
}