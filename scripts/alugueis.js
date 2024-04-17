const uri = "http://localhost:3000/alugueis";

//Listar todos os augueis em uma tabela
axios.get(uri)
    .then((response) => {
        console.log(response.data);
        const data = response.data;
        let output = '';
        data.forEach(function (aluguel) {
            output += `
            <tr>
                <td>${aluguel.id}</td>
                <td>${aluguel.nome_cliente}</td>
                <td>${aluguel.reserva.split('T')[0]}</td>
                <td>${aluguel.retirada != null ? aluguel.retirada.split('T')[0] : ""}</td>
                <td>${aluguel.devolucao != null ? aluguel.devolucao.split('T')[0] : ""}</td>
                <td>${aluguel.modelo}</td>
                <td>${aluguel.marca}</td>
                <td>${aluguel.subtotal}</td>
            </tr>
            `;
        }
        );
        document.getElementById('container').innerHTML = output;
    }
    )
    .catch((error) => {
        console.error(error);
    }
    );