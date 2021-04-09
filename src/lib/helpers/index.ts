const getRandom = (min = 1, max = 670) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const formatter = new Intl.NumberFormat()

export const getRandomImage = () => {
  return `https://rickandmortyapi.com/api/character/avatar/${getRandom()}.jpeg`
}

export const getRandomLikes = () => {
  return formatter.format(getRandom(1, 15000))
}

export const getResourceIdFromUrl = (resourceUrl) => {
  const [id] = resourceUrl.split('/').slice(-1)
  return id
}
