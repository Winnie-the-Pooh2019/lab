package utils

import kotlin.js.Json
import kotlin.js.json

@Suppress("UNCHECKED_CAST")
object UJSON {
    fun stringify(data: Map<String, Any?>): Json {
        val arrayOfPairs: Array<Pair<String, Any?>> = data.map {
                entry ->
            when (entry.value) {
                is Map<*, *> -> {
                    Pair(entry.key, stringify(entry.value as Map<String, Any?>))
                }

                is Iterable<*> -> {
                    Pair(entry.key, stringify(entry.value as Iterable<Any?>))
                }

                else -> {
                    entry.toPair()
                }
            }
        }.toTypedArray()

        return json(*arrayOfPairs)
    }

    fun stringify(data: Iterable<Any?>): Array<Any?> {
        val array: Array<Any?> = data.map {
                entry ->
            if (entry is Map<*,*>) {
                stringify(entry as Map<String, Any?>)
            }
            else {
                entry
            }
        }.toTypedArray()

        return array
    }

    fun toMap(json: Any): Map<String, Any?>? {
        if (jsTypeOf(json) != "object") {
            return null
        }

        val map: MutableMap<String, Any?> = mutableMapOf()

        val keys = js("Object.keys(json)") as Array<String>

        for (key in keys) {
            when {
                js("typeof json[key]") == "object" -> {
                    map[key] = toMap(js("json[key]") as Any)
                }
                else -> {
                    map[key] = js("json[key]") as String
                }
            }
        }

        return map
    }
}