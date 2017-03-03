class ContatoService
{

	envia(contato, callbackFunction)
	{
		console.log(JSON.stringify(contato));

		$.ajax({				 
			url:"http://jrodontologia.com/jrodon-rest/contato/add/",
			contentType: 'application/json',
			dataType: 'json',
			type: 'post',
			data: JSON.stringify(contato),
			success:function(resposta)
			{
				console.log('Contato enviado. ' + JSON.stringify(resposta));
				callbackFunction(resposta);
			},
			error:function(error)
			{
				console.log('Erro: ' + error);
				callbackFunction(null);
			}
			});
	}
}