const fs = require('fs');
const colors = require('colors');

let listarTabla = ( base, limite ) => {

    console.log("=======================================");
    console.log(`==========Tabla de ${ base }===========`.green);
    console.log("=======================================");
    let data = '';
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(data);
}


let crearArchivo = function( base, limite = 10 ) {

    return new Promise(function(resolve, reject) {

        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-al${ limite }.txt`, data, (error) => {
            if (error) reject(error);
            else
                resolve(`
                ================================================
                El archivo de la tabla-${base}.txt ha sido creada
                =================================================
                `.yellow)
        });
    });

}


module.exports = {
    crearArchivo, /* Es igual a crearArchivo: crearArchivo (gracias a ES6) */
    listarTabla
}