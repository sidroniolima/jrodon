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

	enviaJQuery(contato, callbackFunction)
	{
		$('#spinner').show();console.log(contato);

		$.post("http://jrodontologia.com/jrodon-rest/contato/add/", contato, function(resposta) {
			
		})
		.done(function(resposta)
		{	
			callbackFunction(resposta);	
		})
		.fail(function(resposta) 
		{
			callbackFunction(null);
		})
		.always(function(resposta) {
			$('#spinner').hide();			
		})
	}
}