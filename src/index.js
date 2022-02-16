import fruit from "./foods"
import { choice, remove } from "./helpers"

const randomFruit = choice(fruit)
console.log(`I’d like one ${randomFruit}, please.`)
console.log(`Here you go: ${randomFruit}`)
console.log(`Delicious! May I have another?`)
remove(fruit, randomFruit)
console.log(`I’m sorry, we’re all out. We have ${fruit.length} left.`)