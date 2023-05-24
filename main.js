//Como calcular o IMC
/*
    IMC
    Menor do que 18,5 = Abaixo do peso normal
    18,5 - 24,9 = Peso normal
    25,0 - 29,9 = Excesso de peso
    30,0 - 34,9 = Obsidade classe I
    35,0 - 39,9 = Obsidade classe II
    Maior ou Igual a 40,0


*/ 
const button = document.getElementById('button');

button.addEventListener('click', function(event) {
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = peso / (altura * 2 );

    const resultado = document.getElementById('resultado');

    if(imc < 18.5){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <br/> Você está abaixo do peso normal' ;
    }else if(imc >= 18.5 && imc < 24.9){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <br/> Você está no peso normal';
    }else if(imc >= 25.0 && imc < 29.9){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <br/> Você está com excesso de peso';
    }else if(imc >= 30.0 && imc <34.9){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <br/> Você está com obesidade classe I';
    }else if(imc >= 35.0 && imc < 39.9){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <br/> Você está com obesidade classe II';
    }else if(imc >= 40){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <br/> Você está com obesidade classe III';
    }

    document.getElementById('peso').value = ' ';
    document.getElementById('altura').value = ' ';
}
)




