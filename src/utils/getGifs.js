const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=8&api_key=B5Uezh9P33ux9oCAKuJ1mxWFJVieRrSL`
  const res = await fetch(url)
  const { data } = await res.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })

  return gifs
}

export default getGifs