package utils.net

import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import kotlinx.coroutines.*

suspend fun fetchAsync(url: String): HttpResponse {
    val response = GlobalScope.async(Dispatchers.Default) {
        val client = HttpClient()

        val data = client.get(url)
        client.close()
        return@async data
    }

    return response.await()
}