export function getNYTHref(uri:string){
  return uri.split('/').at(-1)
}
