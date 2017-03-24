class AvaliacaoController 
{

	constructor()
	{
		let _self = this;

		this._contato = 
			{	to: '', 
				from: '', 
				nome: '', 
				assunto: 'Marcação de avaliação', 
				telefone: '', 
				email: '', 
				mensagem: ''
			};
		
		this._inputNome = $('#nome');
		this._inputEmail = $('#email');
		this._inputTel = $('#telefone');

		this._inputReclamacao = $('#reclamacao');
		this._inputHorario = $('#melhor-horario');

		this._alertDanger = $('.alert-danger');
		this._alertSuccess = $('.alert-success');

		this._service = new ContatoService();

		$("form").submit(function(event) {
			event.preventDefault();
			_self.marcaAvalicao();
		});	
	}

	marcaAvalicao()
	{
		
		console.log('Enviando...');
		
		this._contato.to = 'jrodontologia@jrodontologia.com';
		this._contato.from = 'mail@tetrati.com.br';
		this._contato.nome = $('#nome').val();
		this._contato.email = $('#email').val();		
		this._contato.telefone = $('#telefone').val();
		this._contato.mensagem = $('#reclamacao').val() + '\n' + 
			'Melhor horário: ' + $('#melhor-horario').val();

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
			
			setInterval(
				function() {
					$('#myModal').modal('hide');}, 2000);
		}
	}

	_limpaForm()
	{
		$('#nome').val('');
		$('#email').val('');
		$('#telefone').val('');
	}	
}