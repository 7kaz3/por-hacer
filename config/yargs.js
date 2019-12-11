const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    demand: false,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs').command('crear', 'Esta accion crea una tarea', { descripcion })
    .command('actualizar', 'Esta accion lista todas las tareas por hacer', { descripcion, completado })
    .command('eliminar', 'Esta cosa eliminar una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}