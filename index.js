 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
   let count = 0
   function increment() {
     count += 1
      countEl.textContent = count
      console.log(count)
   }

  function save() {
    let count2 = count + " - "
    saveEl.textContent += count2
    console.log(count)
    countEl.textContent = 0
    count = 0
}