function toggle(el, display) {
    el.style.display = el.style.display == 'none' ? display : 'none';
    console.log(el.style.display)
}

document.querySelector('.livewidget__toggle-block button').onclick = function() {
	toggle(document.querySelector('.livewidget-block'), 'block');
	console.log(this.innerHTML)
	this.innerHTML = (this.innerHTML == "Мы готовы помочь") ? 'свернуть' : "Мы готовы помочь"
	
}

let disabled_buttons = document.querySelectorAll('.item_video-block button')
for (let i = 0;i < disabled_buttons.length; i++) {
	disabled_buttons[i].addEventListener('click',function(event){
		this.classList.toggle('button__disabled')
	})
}

let navigation_item = document.querySelectorAll('.item__header');
for (let i = 0; i < navigation_item.length; i++) {
	navigation_item[i].addEventListener('click',function(event){
toggle(this.nextElementSibling, 'flex');	
this.classList.toggle('active__list')
}
)
}