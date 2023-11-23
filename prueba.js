



//WITH CALLBACKS
/* const sayText = (text, callback) => {
    if (text !== undefined) {
        callback(null, text);
    } else {
        callback('text incorrect');
    }
};

sayText(
    'hola ',
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }
);
 */




/*
WITH PROMISES
const sayText=(text)=>{
return new Promise((resolve,reject)=>{
    resolve(text);
    reject(text);
}
)


}
sayText('hola').then((resolvedValue)=>console.log(resolvedValue)).catch((rejectedValue)=>console.log(rejectedValue))

*/
/*
WITH TRY AND CATCH
const sayText=async (text)=>{
    try{
        return(text);
        
    }
    catch{
        return('este texto es undefined');
    }
    
    
    }
sayText('hola').then((text)=> console.log(text)).catch((err)=> console.log(err))
*/

