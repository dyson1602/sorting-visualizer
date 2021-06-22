const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomizeArray = (arrayLength) => {
  let array = []
  for (let i = 0; i < arrayLength; i++) {
    array.push(getRandomInt(20, 400))
  }
  return array
}

export const generateColorArray = (arrayLength, arrayColor) => {
  let array = []
  for (let i = 0; i < arrayLength; i++) {
    array.push(arrayColor)
  }
  return array
}
