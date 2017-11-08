<?php
    function connBD(){
        $servidor = "localhost";
        $usuario =  "root";
        $senha = "";
        $bancodedados = "test";
        $mysqli = new mysqli($servidor, $usuario, $senha, $bancodedados);
        if ($mysqli->connect_errno) {
            echo "Falha ao conectar com o banco de dados: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
            return false;
        }
        $mysqli->set_charset("utf8");
        return $mysqli;
    }

    function exeSqlInsert($acao, $tabela, $campos, $variaveis){
        $conexao = connBD();
        if(!$conexao)
            return false;
        $sql = $acao." into ".$tabela." (".$campos.") values (".$variaveis.")";
        $resultado = $conexao->query($sql) or die($conexao->error."<br />".$sql);

        $conexao->close();

        if ($resultado) {
            return true;
        } else {
            return false;
        }
    }

    function trataSql($json){
        //convert json object to php associative array
        $dataJson = json_decode($json, true);

        //return var_dump($dataJson);
        //return count($dataJson);
        //return key($dataJson);
        //return current($dataJson);
        $campos = "";
        $variaveis = "";
        while ($nam = current($dataJson)) {
                $campos = $campos.",".key($dataJson);
                $variaveis = $variaveis.',"'.$dataJson[key($dataJson)].'"';
            next($dataJson);
        }
        $campos = substr($campos,1);
        $variaveis = substr($variaveis,1);

        return exeSqlInsert($_POST["acao"], $_POST["tabela"], $campos, $variaveis);
    }

    trataSql($_POST["json"]);
?>