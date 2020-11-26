import usuario from './usuarios'
const expect = global.expect

describe('swclass', () => {
    const newusuarios = [{
        nombre: 'John',
        email: 'john@gmail.com',
        id: 1,
        password: '123456',
        username: 'jhonh21'

    }, {
        nombre: 'Alex',
        email: 'alex@gmail.com',
        id: 2,
        password: '123456',
        username: 'Alex21'

    }, {
        nombre: 'Ryan',
        email: 'Ryan@gmail.com',
        id: 3,
        password: '123456',
        username: 'Ryan21'

    }]



    describe('Insert Users', () => {
        beforeEach(() => {

            require('./database')
            usuario.reboot()
        });
        test('Debe retornar un error y supender la insercion', () => {
            const usuario = {
                nombre: '',
                email: ''
            }

            expect(() => usuario.incluir(usuario)).toThrow('Formato inválido');


        })
        test('Debe retornar un error informado la disparidad de datos', () => {

        })
        test('Debe retornar el dato si cifrar y un error', () => {

        })
        test('Debe retornar un mensaje de confrimacion e inserta usuario', () => {
            const usuario = newusuarios[0]
            usuario.incluir(usuario)
            const actual = usuario.db()
            const esperado = [contacto]
            expect(actual).toEqual(esperado)

        })




    })

    describe('borrar', () => {
        beforeEach(() => {
            usuario.reiniciar();
            variosusuario.forEach(contacto => usuario.incluir(contacto));
        });

        test('Debe borrar solo el primer contacto', () => {
            usuario.borrar(1);

            const actual = usuario.db();
            const esperado = [
                variosusuario[1],
                variosusuario[2],
            ];

            expect(actual).toEqual(esperado);
        });

        test('No debe borrar ningún contacto si el id no se encontró', () => {
            usuario.borrar(100);
            const actual = usuario.db();
            const esperado = variosusuario;

            expect(actual).toEqual(esperado);
        });

    });

    describe("verificar tipo de datos", () => {

        test('debe retornar un mensaje de error ', () => {

        })

        test('debe retornar un error por falta de datos ', () => {

        })


        test('Debe renortar que todo esta ok', () => {

        })

        test('Debe retornar mensaje de error por datos incorrecctos', () => {

        })




    })


    // describe("Verificar actualizacion y eliminacion de datos", () => {

    //     test('Deber retornar un mensaje de ambio exitoso', () => {

    //     })

    //     test('Notificación de cambio realizado con éxito y actualización de los datos en la base de datos ', () => {

    //     })


    //     test('Debe renortar un mensaje de erro y no actualizar los datos', () => {

    //     })

    //     test('Debe retornar mensaje de informcion de datos elminados ', () => {

    //     })




    // })








})