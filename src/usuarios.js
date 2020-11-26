let usuario

export default {
    incluir(usuario) {

        if (usuario.hasOwnProperty('nombre') &&
            usuario.hasOwnProperty('email') &&
            usuario.hasOwnProperty('password') &&
            usuario.hasOwnProperty('username')) {
            usuario.push(usuario)
        } else {
            throw "Formato invalido"
        }
    },

    reboot() {
        contactos = [];
    },
    borrar(UsuarioId) {
        const index = usuario
            .map(({ id }) => id)
            .findIndex(id => id === UsuarioId);

        if (index > -1) {
            usuario = [
                ...usuario.slice(0, index),
                ...usuario.slice(index + 1),
            ];
        }
    },

    db() {
        return [
            ...usuario,
        ]
    }


}