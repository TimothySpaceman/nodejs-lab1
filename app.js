const { argv } = require("yargs")
const u = require("./user.js")
var yargs = require("yargs").strict().command(
    "add",
    "",
    {
        title: {
            demand: true,
            type: "string"
        },
        level: {
            demand: true,
            type: "string"
        }
    },
    (argv) => console.log(u.add(argv))
).command(
    "set",
    "",
    {
        title: {
            demand: true,
            type: "string"
        },
        level: {
            demand: true,
            type: "string"
        }
    },
    (argv) => console.log(u.set(argv))
).command(
    "remove",
    "",
    {
        title: {
            demand: true,
            type: "string"
        }
    },
    (argv) => console.log(u.remove(argv))
).command(
    "list",
    "",
    {},
    () => console.log(u.list())
).command(
    "read",
    "",
    {
        title: {
            demand: true,
            type: "string"
        }
    },
    (argv) => console.log(u.read(argv))
).argv
