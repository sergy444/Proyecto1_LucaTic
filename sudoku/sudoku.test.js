describe('funcion sudokus', () => {
    it("debe regresar sudoku facil", () => {
        expect(setDificultad(1).toEqual(sudokuFacil, sudokuFacilVacio));
    });
    it("debe regresar sudoku intermedio", () => {
        expect(setDificultad(2).toEqual(sudokuInter, sudokuIntervacio));
    });
    it("debe regresar sudoku dificil", () => {
        expect(setDificultad(3).toEqual(sudokuDificil, sudokuDificilVacio));
    });
});