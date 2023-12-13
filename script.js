let adjective = prompt('enter and adjective:')
let noun = prompt(' enter a noun:')
let verb = prompt('enter a verb:')
let adverb = prompt(' enter a adverb:')

let story = `once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}.`

let madlibOutputDiv = document.getElementById('madLibOutput')

madlibOutputDiv.innerHTML = `<p>${story}</p>`