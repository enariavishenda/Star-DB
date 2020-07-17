export default class SwapiService {

    _apiBase = 'https://swapi.dev/api'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json(); //return body object
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        //мы не хотим отдавать коллекцию полученную от API
        //хоти передавать измененную коллекцию через метод API_transformPerson()
        return res.results.map(this.API_transformPerson)
    }
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`)
        return this.API_transformPerson(person)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this.API_transformPlanet)
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`)
        return this.API_transformPlanet(planet)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this.API_transformStarship)
    }
    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}/`)
        return this.API_transformStarship(starship)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1] //первая группа между ( ... )
    }

    API_transformPlanet = (planet) => {
        return {
            id: this._extractId(planet), //после того как вытащили из url с помощью функции _extractId
            name: planet.name,
            population: planet.population,
            rotation: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    API_transformStarship = (starship) => {
        return {
            id: this._extractId(starship), //после того как вытащили из url с помощью функции _extractId
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    API_transformPerson = (person) => {
        return {
            id: this._extractId(person), //после того как вытащили из url с помощью функции _extractId
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }


}

// const swapi = new SwapiService();
//
// swapi.getAllPeople().then((piple) => {
//     piple.forEach(({name}) => {
//         console.log(name)
//     })
// })
//
// swapi.getAllPlanet().then((plan) => {
//     plan.forEach(({name}) => {
//         console.log(name)
//     })
// })