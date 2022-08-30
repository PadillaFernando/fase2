cosnt data = {
    username: 'listo',
    email: 'john@doe.com'
}

fetch(
    'http://example.com/data.json',
{
    method: 'POST',
    Headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

