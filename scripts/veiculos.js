const uri = "http://localhost:3000/veiculos";

//Consumir com AXIOS
axios.get(uri)
    .then((response) => {
        console.log(response.data);
        const data = response.data;
        let output = '';
        data.forEach(function (v) {
            output += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Placa: ${v.placa}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Modelo: ${v.modelo}</h6>
                    <p class="card-text">Marca: ${v.marca}</p>
                    <p class="card-text">Tipo: R$ ${v.tipo}</p>
                    <p class="card-text">Diária: R$ ${v.diaria}</p>
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