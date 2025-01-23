const protocolos = {
    http: {
        nome: "HTTP",
        descricao: "Protocolo de Transferência de Hipertexto, utilizado para comunicação entre cliente e servidor na web. Atua na camada de Aplicação.",
        camada: "Aplicação"
    },
    tcp: {
        nome: "TCP",
        descricao: "Protocolo de Controle de Transmissão, responsável por garantir a entrega confiável de dados entre dois dispositivos. Atua na camada de Transporte.",
        camada: "Transporte"
    },
    ip: {
        nome: "IP",
        descricao: "Protocolo de Internet, responsável pelo roteamento de pacotes de dados entre redes. Atua na camada de Internet.",
        camada: "Internet"
    },
    ethernet: {
        nome: "Ethernet",
        descricao: "Tecnologia de rede local, que define como os dispositivos comunicam-se dentro de uma rede. Atua na camada de Enlace de Dados.",
        camada: "Enlace de Dados"
    },
    ftp: {
        nome: "FTP",
        descricao: "Protocolo de Transferência de Arquivos, utilizado para transferir arquivos entre dispositivos. Atua na camada de Aplicação.",
        camada: "Aplicação"
    }
};

document.getElementById("protocoloSelect").addEventListener("change", function() {
    const protocolo = this.value;
    const descricaoDiv = document.getElementById("descricao");
    
    if (protocolo === "none") {
        descricaoDiv.innerHTML = "";
        return;
    }

    const detalhes = protocolos[protocolo];
    descricaoDiv.innerHTML = `
        <div class="detalhe-item"><strong>Protocolo:</strong> ${detalhes.nome}</div>
        <div class="detalhe-item"><strong>Descrição:</strong> ${detalhes.descricao}</div>
        <div class="detalhe-item"><strong>Camada:</strong> ${detalhes.camada}</div>
    `;
});
