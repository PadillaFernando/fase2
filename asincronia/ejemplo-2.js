function addOne(value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value + 1), 500)
    })
  }
  
  addOne(1)
    .then(result => {
      console.log(result) // 2
      
      return addOne(result)
    })
    .then(result => console.log(result)) // 3;



    // ejemplo de catch
    function addOne(value) {
        return new Promise(resolve => {
          setTimeout(() => resolve(value + 1), 500)
        })
      }
      
      addOne(1)
        .then(result => {
          console.log(result) // 2
          return Promise.reject('ooops!')
        })
        .then(result => console.log(result)) // 3;