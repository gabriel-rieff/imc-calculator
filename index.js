const  calcular  =  document . getElementById ( 'calcular' ) ;

function imc (){
    let resutadoElement = document.getElementById('resultado');
    let pesoElement = document.getElementById('peso').value;
    let alturaElement = document.getElementById('altura').value;

    if (pesoElement !== '' && alturaElement !== ''){

        const valorIMC = (pesoElement / (alturaElement * alturaElement)).toFixed(1)
        //const valorIMC = (pesoElement / (alturaElement * alturaElement)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = `neste caso, é necessária a busca por um 
            especialista, para verificar a existência de algum problema de saúde causador do índice abaixo 
            do normal, ou analisar se sua saúde não está sendo afetada.`;
        }else if (valorIMC < 25) {
            classificacao = `São pesos considerados normais pela OMS. No entanto, mesmo nesta faixa de peso, deve-se ter
            atenção e cuidado com possíveis problemas metabólicos, principalmente se houver acúmulo de 
            gordura na região interna do abdômen.`;
        }else if (valorIMC < 30){
            classificacao = `Peso em pré-obesidade ou acima do peso, representando um risco maior para a saúde. Nesta causa,
            é imprescindível uma consulta com um especialista, pois pode estar relacionado à pressão alta,
            colesterol alto ou diabetes, podendo apontar até para o hipotireoidismo. Este é o seu índice?
             Se sim, é tempo de consultar um profissional, realizar exames e pensar em uma reeducação alimentar e exercícios físicos.`;
        }else if (valorIMC < 35){
            classificacao = `Este índice indica obesidade grau um. Este peso aumenta riscos para várias doenças, como diabetes,
            hipertensão arterial, o infarto do miocárdio e diversos tipos de câncer. A obesidade já é considerada
            uma comorbidade e necessita de tratamento profissional. O indicado é consultar um especialista e receber acompanhamento adequado.`;
        }else if (valorIMC < 40){
            classificacao = `Indica obesidade grau dois. Este peso já representa risco elevado para as doenças supracitadas.
            Como em todos os casos, mas neste impreterivelmente, deve-se buscar um profissional especializado
            e receber as orientações e medidas adequadas para obter uma saúde equilibrada.`;
        }
        
        else if (valorIMC > 40){
            classificacao = `Indica obesidade grau três ou mórbida. O peso neste grau apresenta problemas extremamente graves e necessita
            de tratamento profissional com o máximo de recursos disponíveis, incluindo até cirurgia.`
        }

        else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resutadoElement.textContent = `Seu IMC é ${valorIMC}, ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }


}


calcular.addEventListener('click', imc);