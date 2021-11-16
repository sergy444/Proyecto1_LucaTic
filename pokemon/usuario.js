class Usuario {
    constructor(nombre, puntuacion) {
        this.nombre = nombre;
        this.puntuacion = puntuacion;
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



export default Usuario;