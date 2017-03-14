class ContatoController
{

	constructor()
	{
		let _self = this;
		this._contato = {nome: '', assunto: '', email: '', mensagem: ''};

		this._inputNome = $('#nome');
		this._inputAssunto = $('#assunto');
		this._inputEmail = $('#email');
		this._inputTel = $('#telefone');
		this._inputMensagem = $('#message2');	

		this._alertDanger = $('.alert-danger');
		this._alertSuccess = $('.alert-success');

		this._service = new ContatoService();

		$("form" ).submit(function(event) {
			event.preventDefault();
			_self.enviaContato();
		});	
	}

	enviaContato()
	{
		
		console.log('Enviando...');

		this._contato.nome = $('#nome').val();
		this._contato.assunto = $('#assunto').val();
		this._contato.email = $('#email').val();
		this._contato.mensagem = $('#message2').val();
		this._contato.tel = $('#telefone').val();

		console.log(this._contato);

		this._service.enviaJQuery(this._contato, this._exibeMensagem.bind(this));
		
	}

	_exibeMensagem(resposta)
	{
		if (!resposta)
		{
			$('.texto-alerta').text('Não foi possível enviar o contato.').toggleClass('alert-danger').toggle();

			this._limpaForm();

		} else{
			$('.texto-alerta').text('Contato enviado com sucesso. Em breve o respoderemos.').toggleClass('alert-success').toggle();
		}
	}

	_limpaForm()
	{
		$('#nome').val('');
		$('#assunto').val('');
		$('#email').val('');
		$('#telefone').val('');
		$('#message2').val('');
	}
}