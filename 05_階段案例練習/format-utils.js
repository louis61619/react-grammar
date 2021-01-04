function formatPrice(price) {
  if(typeof price !== "number") {
    //邏輯或常常用來作為給予默認值
    price = Number(price) || 0
  }
  return "$" + price.toFixed(2)
}