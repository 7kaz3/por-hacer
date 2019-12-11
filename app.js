const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======= Por Hacer ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======= Fin Tarea ======='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log(actualizado);
        }
        break;

    case 'eliminar':
        let eliminado = porHacer.eliminar(argv.descripcion);
        if (eliminado) {
            console.log('Se eliminó la tarea!');
        }
        break;

    default:
        console.log('Comando desconocido');
}