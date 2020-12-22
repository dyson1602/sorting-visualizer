//min inclusive, max exclusive
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomizeArray = (arrayLength) => {
  let array = []
  for (let i = 0; i < arrayLength; i++) {
    array.push(getRandomInt(20, 400))
  }
  return array
}


export { randomizeArray }