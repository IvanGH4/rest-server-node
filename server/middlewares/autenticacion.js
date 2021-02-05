const jwt = require('jsonwebtoken');

// Verificar token

let verificaToken = ( req, res, next ) => {

    let token = req.get('token'); // accedo al header con el get y al token que estoy buscando

    jwt.verify( token, process.env.SEED, (err, decoded) => { // en el decoded esta la info del user

        if(err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;

        next();

    });

}

// Verifica admin role

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if(usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }

}

module.exports = {
    verificaToken,
    verificaAdmin_Role
}