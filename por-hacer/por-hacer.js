const fs = require('fs');

let listadorPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadorPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadorPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const cargarDB = () => {
    try {
        listadorPorHacer = require('../db/data.json');
    } catch {
        listadorPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadorPorHacer;
}

const actualizar = (descripcion, estado) => {
    cargarDB();
    let index = listadorPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadorPorHacer[index].completado = estado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {
    cargarDB();
    let nuevaLista = listadorPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadorPorHacer.length === nuevaLista.length) {
        return false;
    } else {
        listadorPorHacer = nuevaLista;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}