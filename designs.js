//evento do botao enviar
$("#sizePicker").submit(function(event){

	$('#pixelCanvas').html('');
	//selecionando os valores de height e width fornecido pelo usuário
	let height = $('#inputHeight').val();
	let width = $('#inputWidth').val();

	//chamando makeGrid e passando os valores de height e width como argumento
	makeGrid(height, width);

	//a pagina atualiza quando é clicado o botão submit, esse método impede isso
    event.preventDefault();

});

//essa funcao cria um loop que recebe como paramentos o height e o width fornecidos pelo usuário para assim criar o grid
function makeGrid(h, w) {

	for (var line = 0; line < h; line++) {
		//nesse loop, será feito as linhas, pegará a altura e fará a quantidade de linhas baseado no seu valor
        $('#pixelCanvas').append($('<tr></tr>'));

        for (var col = 0; col < w; col++) {
        	//neste loop, td esta sendo inserido dentro de tr para que seja feito as colunas, baseado no valor de width
        	$('tr').last().append($('<td></td>'));
        }
    }
}

//evento que colore a celula alvo da tabela quando o usuário a clica
$('#pixelCanvas').on('click', function(event){
	//selecionando a cor
	let color = $('#colorPicker').val();

	//definindo a cor da célula
	if(event.target.nodeName.toLowerCase() === 'td' && event.target.style.backgroundColor === ''){
		console.log(event.target);
		$(event.target).css('background-color', color);
	} else {
		$(event.target).css('background-color', '');
	}
});