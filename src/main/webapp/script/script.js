function guardar(){
	let sexo = document.getElementsByName('tuSexo')[0].value;
    let altura = document.getElementsByName('tuAltura')[0].value;
    let edad = document.getElementsByName('tuEdad')[0].value;
    sexo.toLowerCase();
    if(sexo==="hombre"){
		let resultado= 50+((altura-150)/4)*3 + (edad - 20)/4;
		document.write(resultado);
	}else{
		let resultado2 = (50+((altura-150)/4)*3 + (edad - 20)/4)*0.9;
		document.write(resultado2);
	}
}