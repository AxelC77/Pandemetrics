
const oracledb = require('oracledb');

async function oracle(){
    try{
        const connection = await oracledb.getConnection({
            user:'mmarchio',
            password:'xgiPRzfyJa3m6NFhGqi0Uycl',
            connectString:'oracle.cise.ufl.edu/orcl'
        });
        const result = await connection.execute('SELECT COUNT(*) FROM XKE.person WHERE "Weight" > 300');
        return result;
    }
    catch(e){
        console.log('exception',e);
    }
}

export default oracle