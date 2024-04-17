const uri = "http://localhost:3000/clientes";

//Listar todos os augueis em uma tabela
axios.get(uri)
    .then((response) => {
        console.log(response.data);
        const data = response.data;
        let output = '';
        data.forEach(function (c) {
            output += `
            <tr>
                <td>${c.cpf}</td>
                <td>${c.nome_cliente}</td>
                <td>${c.telefones}</td>
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