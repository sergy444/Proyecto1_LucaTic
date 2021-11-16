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
        nombre: "Red",
        puntuacion: 9999
    }, {
        nombre: "Ash",
        puntuacion: 2500
    },
    {
        nombre: "Misty",
        puntuacion: 2000
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