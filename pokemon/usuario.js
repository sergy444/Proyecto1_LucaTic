class Usuario {
    constructor(nombre, puntuacion) {
        this.nombre = nombre;
        this.puntuacion = puntuacion;
    }

    get nuevoScore() {
        return this.puntuacion;
    }

    set nuevoScore(newScore) {
        this.puntuacion = newScore;
    }
}

const highScores = [{
        username: "Red",
        score: 9999
    }, {
        username: "Ash",
        score: 2500
    },
    {
        username: "Misty",
        score: 2000
    },
]

localStorage.setItem("scores", JSON.stringify(highScores))

const setScore = function () {

    return localStorage.setItem("scores", JSON.stringify(highScores))



}





export {

    setScore

}

export default Usuario;