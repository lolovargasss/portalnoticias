module.exports=function(app){
	app.get('/noticias',function(req,res){
	const mysql=require('mysql'); //importação módulo mysql
	const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'ifms',
		database:'portal_noticias'
	});//conecção com o banco de dados portal_noticias
	connection.query('select * from noticias', function(error,result){
		if (error){
			console.log(error);//mostra o erro no terminal
		}
		res.render('noticias/noticias.ejs', {noticias:result});//renderização da tela noticia.ejs juntamente com o envio da variavel result

	});
})
}