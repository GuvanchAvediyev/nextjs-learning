export type TopStory={
  title:string
  section:string
  abstract:string
  published_date:string
  multimedia:MultiMedia[]
  uri:string
}

type MultiMedia={
  caption: string
  copyright: string
  format: string
  height: number
  subtype:string
  type:string
  url:string
  width:number
}
