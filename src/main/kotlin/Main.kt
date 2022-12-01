import utils.UJSON

external fun require(module: String): dynamic
external val __dirname: dynamic

object Fetch {
    val fetch: dynamic = require("node-fetch")
}

fun main() {
    println(greeting("untitled"))

    val express = require("express")
    val http = require("http")
    val path = require("path")
    val app = express()

    val router = express.Router()

    router.get("/") { _, res ->
        res.send(UJSON.stringify(hashMapOf("hello" to "world")))
    }

    router.get("/async") { _, res ->

    }

    app.set("views", path.join(__dirname, "../../../../../src/main/resources"))
    app.set("view engine", "ejs")

    http.createServer(app)
    app.listen(3000)
    app.use("/", router)
}

fun greeting(name: String) =
    "Hello, $name"