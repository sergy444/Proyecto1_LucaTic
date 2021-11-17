const {Usuario, highScores} = require('../usuario.js');

//este pasa
it('metemos parametros en un objeto y comprobamos que sean esos realmente', () =>{
    const user = new Usuario('pepe', 1);
    expect(user.nombre).toBe('pepe');
    expect(user.puntuacion).toBe(1);
});

//este no pasa
/*
it('funciona', () =>{
    const user = new Usuario('pepe', 2);
    expect(user.nombre).toBe('pepe');
    expect(user.puntuacion).toBe(1);
});*/

//este pasa
it('comprobando nombres de los highScores', () =>{
    expect(highScores[0].nombre).toBe('Red');
    expect(highScores[1].nombre).toBe('Ash');
    expect(highScores[2].nombre).toBe('Misty');
});

//este no pasa
/*
it('comprobando highScores', () =>{
    expect(highScores[0].nombre).toBe('Pepe');
    expect(highScores[1].nombre).toBe('Ash');
    expect(highScores[2].nombre).toBe('Misty');
});*/

//este pasa
it('comprobando puntuaciones de los highScores', () =>{
    expect(highScores[0].puntuacion).toBe(9999);
    expect(highScores[1].puntuacion).toBe(2500);
    expect(highScores[2].puntuacion).toBe(2000);
});

//este no pasa
/*
it('comprobando puntuaciones de los highScores', () =>{
    expect(highScores[0].puntuacion).toBe(9999);
    expect(highScores[1].puntuacion).toBe(4000);
    expect(highScores[2].puntuacion).toBe(2000);
});*/