const _ = require("lodash")

//1 - chunk()
//Splits array into chunks the length of size
{
    const arr = ["a", "b", "c", "d", "e"]
    const chunkLength = 2
    const chunks = _.chunk(arr, chunkLength)

    console.group("Method 1 - chunk()")
    console.log("Array", arr)
    console.log("Chunked array", chunks, "\n")
    console.groupEnd()
}

//2 - inRange()
//Checks x number is in the range (a, b)
{
    const tests = [
        {
            x: 3,
            a: -5,
            b: 5
        },
        {
            x: 3,
            a: 0,
            b: 3
        },
        {
            x: -2,
            a: 4
        }
    ]

    console.group("Method 2 - inRange()")
    tests.forEach(t => {
        console.log("x: ", t.x)
        console.log("a: ", t.a)
        console.log("b: ", t.b)
        console.log("inRange: ", _.inRange(t.x, t.a, t.b), "\n")
    })
    console.groupEnd()
}

//3 - at()
//Takes paths and creates an array with corresponding values
{
    const data = {
        id: 73580962008,
        username: "Tim",
        stats: {
            bestTurns: 92,
            moneySpent: 2930000,
            achievements: [
                "Bought an aircraft carrier",
                "Promoted the construction of a private subway",
                "Introduced Minecraft in the curriculum"
            ]
        }
    }

    const paths = ["username", "stats.bestTurns", "stats.achievements[0]"]

    const result = _.at(data, paths)

    console.group("Method 3 - at()")
    console.log("Data: ", data)
    console.log("Paths: ", paths)
    console.log("Result: ", result, "\n")
    console.groupEnd()
}

//4 - findKey()
//Returns the key of the first element that meets the criteria
{
    const data = {
        darkTheme: true,
        fontSize: 18,
        autoSave: false,
        autoComplete: true
    }

    const criteria = x => !x

    const key = _.findKey(data, criteria)

    console.group("Method 4 - findKey()")
    console.log("Data: ", data)
    console.log("Criteria: ", criteria.toString())
    console.log("findKey(): ", key, "\n")
    console.groupEnd()
}

//5 - invert()
//Swaps keys and values of an object
{
    const data = {
        id: 195,
        email: "example@gmail.com",
        username: "TimothySpaceman"
    }

    const invertedData = _.invert(data)

    console.group("Method 5 - invert()")
    console.log("Data: ", data)
    console.log("invert(): ", invertedData, "\n")
    console.groupEnd()
}

