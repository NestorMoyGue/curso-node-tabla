
const { rejects } = require('assert')
const fs= require('fs')
const colors=require('colors');

const createTableMultiply=async (base=5,listar,hasta)=>{
    
    try{
        


    let salida=''
    let consola=''


    for (let i = 0; i < hasta+1; i++) {
        consola +=`${base} x ${i} = ${(base * i)} \n`
        salida += `${colors.green(base)} ${colors.red('x')} ${colors.blue(i)} ${colors.yellow('=')} ${colors.magenta(base * i)} \n`;
    }

    if (listar){  
        console.log('========================'.red)
        console.log(`Tabla del ${base}: `)
        console.log('========================'.red)       
        console.log(salida);
    }


    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
    return `tabla-${(base)} creada`.rainbow
    //resolve(`tabla-${base} creada`)
    //reject('Some error ocurred')
    //console.log(`tabla-${base} creada`)
    }
    catch(err){
        throw err;
    }   

}


module.exports= {
    createTableMultiply
};