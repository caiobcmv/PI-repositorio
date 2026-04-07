function acessarPortal() {
    // Captura qual rádio está selecionado
    const perfilSelecionado = document.querySelector('input[name="perfil"]:checked').value;
    
    // Lógica de redirecionamento baseada no perfil
    if (perfilSelecionado === 'aluno') {
        window.location.href = 'Dasboard.html'; // Crie esta página depois
    } else if (perfilSelecionado === 'coordenador' || perfilSelecionado === 'secretaria') {
        window.location.href = 'dashboardadm.html';
    } else if (perfilSelecionado === 'super-adm') {
        window.location.href = 'configadm.html'; // Crie esta página depois
    } else {
        alert("Por favor, selecione um perfil.");
    }
}