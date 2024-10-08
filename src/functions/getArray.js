const getArray = (number,arr)=>{
  for(let i = 1;i<=number;i++){
    arr.push({
      original:`/img/originals/${i}.webp`,
      thumbnail:`/img/thumbnails/small_${i}.webp`
    })
  }
}

export default getArray