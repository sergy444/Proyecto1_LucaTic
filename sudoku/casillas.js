class Casilla {
    constructor(id ,valor, input) {
        this.id = id;
        this.valor = valor;
        this.input = input;
    }
    esCorrecto() {
        if (valor === input) {
            return true;
        } else return false;
    }
}

function rellenarSudoku(casillasArray){
    let cas;
    for (let i = 0 ; i<81; i++){
        cas = document.getElementById(casillasArray[i].id);
        cas.value = casillasArray.filter(item => item.id === casillasArray[i].id).map(item => item.valor)
    }
}

let casillasArray = [];

function rellenarCasilla(sudoku) {
    let letra;
    for (let i = 65; i <= 73; i++) {
        letra = String.fromCharCode(i).toLocaleLowerCase()
        for (let j = 0; j < 9; j++) {
            casillasArray.push( new Casilla(letra + (j+1), sudoku.vacio[letra][j] === 0 ? null : sudoku.vacio[letra][j] , 0));
        }
    }
    rellenarSudoku(casillasArray)
}
