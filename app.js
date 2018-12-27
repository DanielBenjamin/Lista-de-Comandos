/* const multiplicar = require('./multiplicar'); */
//Escribe esto en la consola ( node app --help )
// node app crear --limite 5 -b 3
const  argv  = require('./config/yargs').argv;
const colors = require('colors');
const {
    crearArchivo,
    listarTabla
} = require('./multiplicar');

let comando = argv._[0];

switch( comando ){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo( argv.base, argv.limite )
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(function (error) {
                console.log('Descripcion del ERROR: ', error);
            })
        break;
    default:
        console.log('Comando no reconocido');
}


/* let base = 1; */


/* console.log(process); */
/* console.log(process.argv); */

/* let argv = process.argv; */
/* let argv2 = process.argv;
console.log(argv.base);
console.log(argv2);
console.log();
let parametro = argv[2];
let base = parametro.split('=');
base = base[1];
 */

/* Comando ha ejecutar es ( node app.js --base=${numero} ) */


/*  */
/* multiplicar.crearArchivo(base)
    .then( archivo => console.log(`Archivo creado ${archivo}`)); */