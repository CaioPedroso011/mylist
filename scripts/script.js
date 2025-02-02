function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        return false; 
    }
    
    return true; 
}

function validarSenha(senha) {
    if (senha.length < 8 ||
        !/[A-Z]/.test(senha) ||
        !/[a-z]/.test(senha) ||
        !/\d/.test(senha)) {
        return false; 
    }
    return true; 
}

function validarFormulario() {
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    if (!validarCPF(cpf)) {
        alert('CPF inválido. Digite um CPF com 11 dígitos numéricos.');
        return false;
    }

    if (!validarSenha(senha)) {
        alert('Senha inválida. A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número.');
        return false;
    }

    
    return true;
}