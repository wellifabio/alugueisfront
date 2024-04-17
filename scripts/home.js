const uri = "http://localhost:3000/alugueis/reservados";

//Consumir com AXIOS
axios.get(uri)
    .then((response) => {
        console.log(response.data);
        const data = response.data;
        let output = '';
        data.forEach(function (aluguel) {
            output += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Id: ${aluguel.id}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Data reserva: ${aluguel.reserva.split('T')[0]}</h6>
                    <p class="card-text">Cliente: ${aluguel.nome_cliente}</p>
                    <p class="card-text">Modelo: ${aluguel.modelo} Marca: ${aluguel.marca}</p>
                </div>
            </div>
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