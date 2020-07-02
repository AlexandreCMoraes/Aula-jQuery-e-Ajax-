// alert("funcionou")
function consultaCep() {
    $(".barra_progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    // faz com que o usuario digite o cep 'valor' desejado

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra_progresso").hide();



            //  pode ser feito dessa maneira acima ou se fosse 'class' teria um ponto no lugar de '#'
            //  document.getElementById("logradouro").innerHTML = response.logradouro
            // document.getElementById("bairro").innerHTML = response.bairro
            // document.getElementById("localidade").innerHTML = response.localidade
            // document.getElementById("uf").innerHTML = response.uf
            // document.getElementById("ibge").innerHTML = response.ibge
            // document.getElementById("gia").innerHTML = response.gia

            //  alert(response.logradouro);

        }
    })
}

$(function () {
    $(".cep").hide();
    $(".barra_progresso").hide();


});
// faz desaparecer a div do cep

