class ContatoController
{

	constructor()
	{
		let _self = this;
		this._contato = {nome: '', assunto: '', email: '', mensagem: ''};

		let $ = document.querySelector.bind(document);

		this._inputNome = $('#nome');
		this._inputAssunto = $('#assunto');
		this._inputEmail = $('#email');
		this._inputMensagem = $('#message2');	

		this._alertDanger = $('.alert-danger');
		this._alertSuccess = $('.alert-success');

		this._service = new ContatoService();

		$('.form').onsubmit = this.enviaContato.bind(this);		
	}

	enviaContato(event)
	{
		event.preventDefault();

		console.log('Enviando...');

		this._contato.nome = this._inputNome.value;
		this._contato.assunto = this._inputAssunto.value;
		this._contato.email = this._inputEmail.value;
		this._contato.mensagem = this._inputMensagem.value;

		this._service.envia(this._contato, this._exibeMensagem.bind(this));
	}

	_exibeMensagem(resposta)
	{
		console.log(resposta);

		if (!resposta)
		{
			this._alertDanger.style.display = 'block';

		} else{
			this._alertSuccess.style.display = 'block';
		}
		
	}
}