document.getElementById('formPesquisa').addEventListener('submit', function (e) {
    e.preventDefault();

    var nomeCompleto = document.getElementById('nomeCompleto');
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var endereco = document.getElementById('endereco');
    var dataNascimento = document.getElementById('dataNascimento');
    var genero = document.getElementById('genero');
    var escolaridade = document.getElementbyId('escolaridade')
    var rendaFamiliarMensal = document.getElementbyID('rendaFamiliarMensal')
    var estadoCivil = document.getElementbyID('estadoCivil')


    let valid = true;

    if (nomeCompleto.value.trim() === '') {
        alert('Por favor, preencha o nome do cliente');
        valid = false;
    }

    var telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(telefone.value)) {
        alert('Telefone deve conter 11 dígitos (DDD + número)');
        valid = false;
    }

    if (email.value !== '') {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Por favor, insira um e-mail válido');
            valid = false;
        }
    }

    if (!validadataNascimento()) {
        valid = false;
    }

    if ($('#genero').val() == '') {
        alert('Escolha uma opção para gênero');
        valid = false;
    }

    if ($('#escolaridade').val() == '') {
        alert('Escolha uma opção para escolaridade');
        valid = false;
    }

    if ($('#rendaFamiliarMensal').val() == '') {
        alert('Escolha uma opção para renda familiar mensal');
        valid = false;
    }

    if ($('#estadoCivil').val() == '') {
        alert('Escolha uma opção para estado civil');
        valid = false;
    }

    if (valid) {
        alert('Pesquisa enviada com sucesso!');
        this.reset();
    }
});

function validadataNascimento() {
    var dataNascimento = document.getElementById("dataNascimento").value;
    if (!dataNascimento) {
        alert('Por favor, preencha a data de nascimento');
        return false;
    }

    dataNascimento = dataNascimento.replace(/\//g, "-"); 
    var dataNascimento_array = dataNascimento.split("-"); 
            
    if(dataNascimento_array[0].length != 4){
       dataNascimento = dataNascimento_array[2]+"-"+dataNascimento_array[1]+"-"+dataNascimento_array[0]; 
    }

    var hoje = new Date();
    var nasc  = new Date(dataNascimento);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
    
    if(idade < 13){
       alert("Pessoas menores de 13 não podem responder a pesquisa.");
       return false;
    }
    
    return true;
}

     
     
