const fs = require("fs")
const _ = require("lodash")
const fileName = "user.json"

module.exports.load = () => {
    try {
        const stringData = fs.readFileSync(fileName, "utf8")
        return JSON.parse(stringData)
    } catch (err) {
        console.log("Error reading the file: ", err)
    }
}

module.exports.save = (data) => {
    try {
        const stringData = JSON.stringify(data)
        fs.writeFileSync(fileName, stringData)
    } catch (err) {
        console.log("Error writing the file: ", err)
    }
}

module.exports.add = ({ title, level }) => {
    if (!title) {
        return "Title is not provided"
    }
    if (!level) {
        return "Level is not provided"
    }

    const data = module.exports.load()

    if (_.findIndex(data.languages, l => l.title == title) >= 0) {
        return "Language is already in the list"
    }

    data.languages.push({ title: title, level: level })

    module.exports.save(data)
    return `Successfully added ${title} to the list`
}

module.exports.remove = ({ title }) => {
    if (!title) {
        return "Title is not provided"
    }

    const data = module.exports.load()

    const index = _.findIndex(data.languages, l => l.title == title)

    if (index < 0) {
        return "Language is not in the list"
    }

    data.languages = data.languages.filter(l => l.title != title)

    module.exports.save(data)
    return `Successfully removed ${title} from the list`
}

module.exports.set = ({ title, level }) => {
    if (!title) {
        return "Title is not provided"
    }
    if (!level) {
        return "Level is not provided"
    }

    const data = module.exports.load()
    const index = _.findIndex(data.languages, l => l.title == title)

    if (index < 0) {
        return "Language is not in the list"
    }

    data.languages[index].level = level

    module.exports.save(data)
    return `Successfully changed ${title} level to ${level}`
}

module.exports.list = () => module.exports.load().languages

module.exports.read = ({ title }) => {
    if (!title) {
        return "Title is not provided"
    }

    const data = module.exports.load()
    const index = _.findIndex(data.languages, l => l.title == title)

    if (index < 0) {
        return "Language is not in the list"
    }

    return data.languages[index]
}
