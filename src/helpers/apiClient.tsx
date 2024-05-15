export async function apiClient<TResponse>(url:string, requestInit?: RequestInit):Promise<TResponse>{

  const response=  await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${url}?api-key=${process.env.NEXT_PUBLIC_API_KEY}`,
    requestInit
  )

  if(response.ok){
    return await response.json()
  }
  throw new Error('Something went wrong!');

}
