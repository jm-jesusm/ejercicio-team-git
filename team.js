const estudiantes = [
    {
        name:"Jairo", 
        surname: "Romero Garzon",
        age: 26, 
        city: "Granada", 
        hobby:"games", 
        favoriteFood: "Spicy",
        favoriteVideoGame: "Legend of Zelda",
        favoriteFilm: "Disney",
        favoriteBook:"Invierno en Paris",
        petName:"Lasobona"
    },
    {
        name: "Jesus",
        surname: "Martinez Garcia",
        age: 20,
        city: "Murcia",
        hobby: "Video-games",
        favouriteFood: "Spaghetties",
        favouriteVideoGame: "Escape from Tarkov",
        favouriteFilm: "Tron",
        favouriteBook: "Las lagrimas de Shiva",
        petName: "Spay"
    }
]

// Takes firts the surname and then the name to make the sort 
function orderBySurnameAndName(array) {
    const sortedArray = array.toSorted((a, b) => {
        // 1 for greater, -1 for lower, 0 to equal
        const surnameOrder = a.surname.localeCompare(b.surname)
        if (surnameOrder !== 0)
            return surnameOrder
        // 1 for greater, -1 for lower, 0 to equal
        const nameOrder = a.name.localeCompare(b.name)
        return nameOrder
    })
    return sortedArray
}

// Prints the name and surname of each person in an array
function printNameAndSurnameFromObjectArray(array) {
    for(const [index, {name, surname}] of array.entries()) {
        console.log(`\t${index+1}) ${surname} ${name}`)
    }
}

// Obtain the middle age of the people in an array
function middleAge(array) {
    let peopleWithAge = 0
    const sumOfAges = array.reduce((acc, { age }) => {
        // Checks if there is an age and doesnt count people that doesnt have an age
        if(age) {
            peopleWithAge++
            return acc + age
        }
        return 0
    }, 0)
    return sumOfAges / peopleWithAge
}

console.log("Team alphabetically ordered: ")
printNameAndSurnameFromObjectArray(orderBySurnameAndName(estudiantes))
console.log("\nMiddle age of the group: " + middleAge(estudiantes))