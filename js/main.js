var currentFormPage = 0;
var amountsOfFormPages = $(".contact-page .form-slider .form-slider-container .form-slider-page").length;
var inTransition = false;


$(document).ready(function(){
	bindEvents();
	initializePage();
});

function bindEvents(){
	$(".contact-page .form-slider .buttons .prev-button").click(changeFormPage);
	$(".contact-page .form-slider .buttons .next-button").click(changeFormPage);
}

function initializePage(){

	if($(".contact-page").index() != -1){
		initializeForm($(".contact-page .form-slider"));
	}
	
}

function initializeForm(form){
	var pages = form.find(".form-slider-container .form-slider-page");
	$(pages[0]).css({"display":"block","opacity":"1"});
}

function changeFormPage(){
	if(!inTransition){
		inTrasition = true;
		if($(this).hasClass("prev-button")){
			if(currentFormPage == 1){
				disableButton($(".contact-page .form-slider .buttons .prev-button"));
			}
			$(this).parent().find(".next-button").find("p").text("Siguiente");
			$(".conditions-container").css("display","none");
			makeAnimationToRightOfForm(currentFormPage - 1);
		}else if($(this).hasClass("next-button")){
			enableButton($(".contact-page .form-slider .buttons .prev-button"));
			//cambiar texto
			if(currentFormPage >= amountsOfFormPages -2){
				$(".conditions-container").css("display","block");
				$(this).find("p").text("Enviar");
			}
			//deshabilitar el boton
			if(currentFormPage < amountsOfFormPages -1){
				console.log("ir a siguiente");
				makeAnimationToLeftOfForm(currentFormPage + 1);
			}else{
				inTrasition = false;
			}
		}
	}
}

function makeAnimationToLeftOfForm(indexOfNext){
	var pages = $(".contact-page .form-slider .form-slider-container .form-slider-page");
	var tl = new TimelineMax();
	$(pages[indexOfNext]).css("display","block");
	tl.to($(pages[indexOfNext]), 0, {x: 20},0)
	.to( $(pages[currentFormPage]), 0.5, {opacity: 0, x: -20, onComplete: function(){ $(pages[currentFormPage]).css("display","none"); }},0)
	.to($(pages[indexOfNext]), 0.5, {opacity: 1,x: 0, onComplete: function(){
		currentFormPage = currentFormPage + 1;
		inTransition = false;
	}}, 0.5);
}

function makeAnimationToRightOfForm(indexOfNext){
	var pages = $(".contact-page .form-slider .form-slider-container .form-slider-page");
	var tl = new TimelineMax();
	$(pages[indexOfNext]).css("display","block");
	tl.to($(pages[indexOfNext]), 0, {x: -20},0)
	.to( $(pages[currentFormPage]), 0.5, {opacity: 0, x: 20, onComplete: function(){ $(pages[currentFormPage]).css("display","none"); }},0)
	.to($(pages[indexOfNext]), 0.5, {opacity: 1,x: 0, onComplete: function(){
		currentFormPage = currentFormPage -1;
		inTransition = false;	
	}}, 0.5);
}

function enableButton(target){
	target.css("display","block");
}
function disableButton(target){
	target.css("display","none");
}