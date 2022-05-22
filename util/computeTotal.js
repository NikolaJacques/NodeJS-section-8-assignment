exports.computeTotal = (arr) => {
    let total = 0
    arr.forEach(item => total += parseFloat(item.price))
    return total
  }