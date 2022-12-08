// Swith theme
let themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
	let body = document.querySelector('body');
	body.classList.toggle('darkmode');
	if (body.classList.contains('darkmode')) {
		themeBtn.classList.replace('fa-moon', 'fa-sun');
	} else {
		themeBtn.classList.replace('fa-sun', 'fa-moon');

	}
});
// Open Search Bar
let searchBtn = document.querySelector('.search-btn'),
	header = document.querySelector('header');
searchBtn.addEventListener('click', () => {
	header.classList.toggle('openSearch');

	if (header.classList.contains('openSearch')) {
		searchBtn.classList.replace('fa-search', 'fa-times');
	}else{
		searchBtn.classList.replace('fa-times', 'fa-search');
	}
});
// Open navbar
let navBtn = document.querySelector('.toggle-btn');
navBtn.addEventListener('click', () => {
	header.classList.toggle('openNav');

	if (header.classList.contains('openNav')) {
		navBtn.classList.replace('fa-bars', 'fa-times');
	} else {
		navBtn.classList.replace('fa-times', 'fa-bars');
	}
	
	window.addEventListener('click', (e) => {
		let sidebar = document.querySelector('.sidebar');
		const clicked = sidebar.contains(e.target) || navBtn.contains(e.target) || themeBtn.contains(e.target);
		if (!clicked) {
			header.classList.remove('openNav');
			navBtn.classList.replace('fa-times', 'fa-bars');
		} else {

		}
	});
});
// HomePage changing Text 
let changeText=()=>{
let changingText=document.querySelector('.changing-text');
	setTimeout(()=>{
		changingText.textContent='asslamalaikum,';
	},0)
	setTimeout(()=>{
		changingText.textContent='Welcome here';
	},4000)
	
}
changeText();
setInterval(changeText,10000);
// about section's Skill Bar
let percentage= document.querySelectorAll('.percentage'),
 progress= document.querySelectorAll('.progress');
let progressStart= 0;
setInterval(()=>{
	progressStart++;
	if (progressStart <= 90) {
		percentage[0].textContent=`${progressStart}%`;
		progress[0].style.width=`${progressStart}%`;
	}
	if (progressStart<=70) {
		percentage[1].textContent=`${progressStart}%`;
		progress[1].style.width=`${progressStart}%`;
	}
	if (progressStart<=40) {
		percentage[2].textContent=`${progressStart}%`;
		progress[2].style.width=`${progressStart}%`;
	}
	if (progressStart<=20) {
		percentage[3].textContent=`${progressStart}%`;
		progress[3].style.width=`${progressStart}%`;
	}
	
},150);
// Form area
let form=document.querySelector('form'),
 nameField=form.querySelector('.name-field'),
 nameInput=form.querySelector('.name'),
 emailField=form.querySelector('.email-field'),
 emailInput=form.querySelector('.email'),
 msgField=form.querySelector('.message-field'),
 msgInput=form.querySelector('.message');
function namecheck(){
	const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
if (!nameInput.value.match(namePattern)) {
	nameField.classList.add('show-error');
	return false;
}else{
	nameField.classList.remove('show-error');
	return true;
}
}
function emailCheck(){
	const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!emailInput.value.match(emailPattern)) {
	  emailField.classList.add('show-error');
		return false;
	} else {
		emailField.classList.remove('show-error');
		return true;
	}
}
function messagecheck(){
	if (msgInput.value.length <= 10) {
		msgField.classList.add('show-error');
	}
	else{
		msgField.classList.remove('show-error');
	}
}
form.addEventListener('submit',(e)=>{
	namecheck();
	emailCheck();
	messagecheck()
	nameInput.addEventListener('keyup',namecheck);
	emailInput.addEventListener('keyup',emailCheck);
	msgInput.addEventListener('keyup',messagecheck);
	if (!nameField.classList.contains('show-error'),
		!emailField.classList.contains('show-error'),
		!msgField.classList.contains('show-error')
		) {
		
	}else{
		e.preventDefault();
	}
	
});
// Scroll To Top 
let body = document.querySelector('body'),
 scrollBtn = document.querySelector('.box');
window.addEventListener('scroll',function(){
	// show scrollToTopBtn
	if (this.scrollY > this.innerHeight) {
		body.classList.add('show-btn');
		body.classList.add('show-icon');
	}
	else if (this.scrollY < this.innerHeight) {
		body.classList.remove('show-btn');
		body.classList.remove('show-icon');
		
	}
});
scrollBtn.addEventListener('click',()=>{
window.scrollTo({
	top: 0,
	// behavior: 'smooth',
})
});
// preloader
window.addEventListener('load', () => {
	document.querySelector('.preloader').style.display = 'none';
});
