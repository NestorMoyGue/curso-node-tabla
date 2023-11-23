
const {createTableMultiply }= require('./helpers/multiply.js')

const argv=require('./config/yargs');

console.clear()


//((console.log( process.argv )))
//console.log( argv )



createTableMultiply(argv.b,argv.l,argv.h)
.then(nombrearchivo=> console.log(nombrearchivo))
.catch(err => console.log(err));



/* const [ , ,arg3='base=5'] =process.argv;

const [, base=5]=arg3.split('=')
console.log(base);

 */
//const base= 4

