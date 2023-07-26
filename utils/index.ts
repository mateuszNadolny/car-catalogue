export async function fetchCars() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (apiKey === undefined) {
        throw new Error('API key is missing')
    }

    const headers = {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    }

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        { headers: headers }
    )

    const result = response.json()

    return result
}
