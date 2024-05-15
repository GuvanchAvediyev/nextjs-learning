export type TTopStory={
  title:string
  section:string
  abstract:string
  published_date:string
  multimedia:TMultiMedia[]
  uri:string
}

type TMultiMedia={
  caption: string
  copyright: string
  format: string
  height: number
  subtype:string
  type:string
  url:string
  width:number
}
