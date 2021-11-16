
const oracledb = require('oracledb');

async function oracle(){
    try{
        const connection = await oracledb.getConnection({
            user:'mmarchio',
            password:'xgiPRzfyJa3m6NFhGqi0Uycl',
            connectString:'oracle.cise.ufl.edu/orcl'
        });
        const result = await connection.execute('SELECT COUNT(*) FROM XKE.COVIDCASE');
        console.log('result',result.rows);
    }
    catch(e){
        console.log('exception',e);
    }
}

oracle();

// PERSON table is in CBURDITT1
// COVIDCASE and USSTATE tables are in XKE