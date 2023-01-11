const shipFactory = (length) => {
  let sunk = false
  let hits = 0

  // Setter
  const hit = () => {
    hits = hits + 1
  }

  // Getter
  const hitsCount = () => {
    return hits
  }

  const isSunk = () => {
    if(length = hits) {
      sunk = true
    }
    
    return sunk
  }

  return { length, isSunk, hitsCount, hit }
}

export default shipFactory


