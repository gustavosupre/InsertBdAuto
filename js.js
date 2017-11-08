function ppost (json, acao, tabela) {
    $.post('envia.php', {json: json, acao: acao, tabela: tabela}, function(r){
        //console.log("enviaJson: "+enviarJson);
        console.log(r);
    });
}
var enviaFormPedido = document.getElementById("botaoEnviarPedido");
enviaFormPedido.addEventListener("click", function(event){
    event.preventDefault();

    var formPedido = document.getElementById("formEnviarPedido");
    var inputs = formPedido.querySelectorAll("input, textarea");
    var ObjectCampos = new Object();
    for (var i=0; i < inputs.length; i++) {
        ObjectCampos[inputs[i].name] = inputs[i].value;
    }

    //console.log(ObjectCampos);

    var enviarJson = JSON.stringify(ObjectCampos);

    ppost(enviarJson, 'insert', 'pedido');
});


var enviaFormCadastro = document.getElementById("botaoEnviarCadastro");
enviaFormCadastro.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.getElementById("formEnviarCadastro");

    var nome = form.nome.value;
    var email = form.email.value;
    var cidade = form.cidade.value;
    var tel = Number(form.tel.value);
    var data = form.data.value;

    var ObjectCampos = new Object();
    ObjectCampos["nome"] = nome;
    ObjectCampos["email"] = email;
    ObjectCampos["cidade"] = cidade;
    ObjectCampos["tel"] = tel;
    ObjectCampos["data"] = data;

    var enviarJson = JSON.stringify(ObjectCampos);
    //console.log(enviarJson);

    ppost(enviarJson, 'insert', 'cadastro');

    /*
    console.log(nome);
    console.log(email);
    console.log(cidade);
    console.log(tel);
    console.log("------------------");


    var inputsName = form.querySelectorAll("input");
    var ObjectCampos = new Object();

    for (var i = 0; i < inputsName.length; i++) {
        ObjectCampos[inputsName[i].name] = inputsName[i].value;
    }
    var enviarJson = JSON.stringify(ObjectCampos);

    console.log(ObjectCampos);
    //console.log(enviarJson);
*/
});
