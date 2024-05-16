export function getNYTHref(url:string){
  const preparedUrl= url.split('/').at(-1)?.split('.html').at(0) ?? ''

  return {
    preparedUrl,
    href:`/article/${preparedUrl}`
  }
}
