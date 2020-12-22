

const setArrayLength = () => {
  //we can modulate this so the arrayLength changes
  let arrayLength = 100
  return arrayLength
}

//min inclusive, max exclusive
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomizeArray = () => {
  let array = []
  for (let i = 0; i < setArrayLength(); i++) {
    array.push(getRandomInt(20, 400))
  }
  return array
}


export { randomizeArray }