const pantInicial = document.querySelector('.pant-inicial');
const pantSudoku = document.querySelector('.pant-sudoku');
const pantScore = document.querySelector('.pant-score');
const btnVerHighscore = document.querySelector('#verHighscore')

document.querySelector('#btn-new').addEventListener('click', () => {
    if (nombre.value.trim().length > 0) {
        pantInicial.classList.add('trans');
        pantSudoku.classList.remove('trans');
        cronometro();
        setDificultad();
        rellenarCasilla(setSudoku);
    } else {
        nombre.classList.add('input-err');
        setTimeout(() => {
            nombre.classList.remove('input-err');
            nombre.focus();
        }, 500);
    }
})

document.querySelector('#verHighscore').addEventListener('click', () => {
    pantSudoku.classList.add('trans');
    pantScore.classList.remove('trans');
    cargarUserScores();
    crearUserScores();
    guardarUserScores();
    imprHighScore();
})