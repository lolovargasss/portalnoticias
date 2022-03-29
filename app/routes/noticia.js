const dbConnection=require('../../config/dbConnection');

module.exports=function(app){

    var connection=dbConnection();
    
    app.get('/noticias',function(req,res){
        
        connection.query('select * from noticias',function(error,result){
            if (error){
                console.log(error);
            }
            res.render('noticias/noticia.ejs',{noticia:result});
            
        });
    });
}