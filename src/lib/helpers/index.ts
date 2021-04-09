const getRandom = (min = 1, max = 670) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const formatter = new Intl.NumberFormat()

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getRandomImage = () => {
  return `https://rickandmortyapi.com/api/character/avatar/${getRandom()}.jpeg`
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getRandomLikes = () => {
  return formatter.format(getRandom(1, 15000))
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getResourceIdFromUrl = (resourceUrl) => {
  const [id] = resourceUrl.split('/').slice(-1)
  return id
}
