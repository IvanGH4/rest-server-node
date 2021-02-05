process.env.PORT = process.env.PORT || 3000;

// entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// vencimiento del token
// 60 seg, 60 mins, 24hs, 30dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//seed de autenticacion

process.env.SEED = process.env.SEED ||  'este-es-el-seed-desarrollo';

// base de datos

let urlDB;

if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ur0h6.mongodb.net/cafe`;
}

process.env.URLDB = urlDB;