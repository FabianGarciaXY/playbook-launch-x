const scores = [
    { name: 'A', score: 95 },
    { name: 'B', score: 98 },
    { name: 'V', score: 80 },
    { name: 'D', score: 50 },
    { name: 'E', score: 85 },
    { name: 'F', score: 100 },
  ]
  
  const scoresGreaterThanEighty = scores.filter((score) => score.score > 80)

  console.log("Ejemplo 8: Filtrando elementos por score")

  console.log(scoresGreaterThanEighty)
  