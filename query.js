var pool = require('./db');

function getDataFromDb(req, res, type) {   
    pool.getConnection(
        function(err, connection){
            if (err) {
                res.send('Ошибка подключения к базе...');
                return;
            } else { 
                switch(type) {
                    case 1: var sql = 'select * from word order by id DESC limit 5'; break;
                    case 2: var sql = 'select * from word where id=' + req.params['id']; break;
                    case 3: var sql = 'select * from word where term like "' + req.params['term'] + '" limit 10'; break;
                    default: var sql = 'select * from word order by id DESC limit 5';
                }
                connection.query(sql, function(err, rows) {
                    connection.release();
                    if(err) {
                        res.send('Ошибка получения данных...');
                        return;                        
                    } else {
                        res.json(rows);
                        return;
                    }         
                });
                connection.on('error', function(err) {      
                    res.send('Ошибка подключения к базе...'); 
                    return;   
                });
            }
        }
    );
}

module.exports = getDataFromDb;