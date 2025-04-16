document.getElementById('formPesquisa').addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeCompleto = document.getElementById('nomeCompleto');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const endereco = document.getElementById('endereco');
    const dataNascimento = document.getElementById('dataNascimento');
    const genero = document.getElementById('genero');

    let valid = true;

    if (nomeCliente.value.trim() === '') {
        alert('Por favor, preencha o nome do cliente');
        valid = false;
    }

    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(telefone.value)) {
        alert('Telefone deve conter 11 dígitos (DDD + número)');
        valid = false;
    }

    if (email.value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Por favor, insira um e-mail válido');
            valid = false;
        }
    }})

    function validadataNascimento(){
        var dataNascimento = document.getElementById("dataNascimento").value;
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
    }
     

    $('#genero').change(function(){
        var value = $(this).val();
           if(value == ''){
             alert('Escolha uma opção');        
         }
     });

     $('#escolaridade').change(function(){
        var value = $(this).val();
           if(value == ''){
             alert('Escolha uma opção');        
         }
     });

     $('#rendaFamiliarMensal').change(function(){
        var value = $(this).val();
           if(value == ''){
             alert('Escolha uma opção');        
         }
     });


     $('#estadoCivil').change(function(){
        var value = $(this).val();
           if(value == ''){
             alert('Escolha uma opção');        
         }
     });


     if (valid) {
        alert('Pesquisa enviada com sucesso!');
        this.reset();
    }

     
     
