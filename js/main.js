var currentFormPage = 0;
var amountsOfFormPages = $(".form-slider .form-slider-container .form-slider-page").length;
var inTransition = false;


$(document).ready(function(){
	bindEvents();
	initializePage();
});

function bindEvents(){
	$(".form-slider .buttons .prev-button").click(changeFormPage);
	$(".form-slider .buttons .next-button").click(changeFormPage);
	$(".form-slider .form-slider-container .form-slider-page .row-form .input .icons-container svg").click(changeColor);
}

function initializePage(){

	if($(".contact-page").index() != -1){
		initializeForm($(".contact-page .form-slider"));
	}else if($(".opinion-page").index() != -1){
		initializeForm($(".opinion-page .form-slider"));
	}
}

function changeColor(){
	var allIcons = $(this).closest(".icons-container").find("svg");
	console.log(allIcons);
	for (var i = 0; i < allIcons.length; i++) {
		if($(this).index() == i){
			$(allIcons[i]).css("fill","red");
		}else{
			$(allIcons[i]).css("fill","black");
		}

	}
}

function initializeForm(form){
	var pages = form.find(".form-slider-container .form-slider-page");
	$(pages[0]).css({"display":"block","opacity":"1"});
}

function changeFormPage(){
	if(!inTransition){
		inTransition = true;
		var slider = $(this).closest(".form-slider");
		if($(this).hasClass("prev-button")){
			if(currentFormPage == 1){
				disableButton(slider.find(".buttons .prev-button"));
			}
			$(this).parent().find(".next-button").find("p").text("Siguiente");
			$(".conditions-container").css("display","none");
			makeAnimationToRightOfForm(currentFormPage - 1);
		}else if($(this).hasClass("next-button")){
			enableButton(slider.find(".buttons .prev-button"));
			//cambiar texto
			if(currentFormPage >= amountsOfFormPages -2){
				$(this).find("p").text("Enviar");
			}
			if($(".page-content").hasClass(".contact-page")){
				$(".conditions-container").css("display","block");
			}
			//deshabilitar el boton
			if(currentFormPage < amountsOfFormPages -1){
				makeAnimationToLeftOfForm(currentFormPage + 1);
			}
		}
	}
}

function makeAnimationToLeftOfForm(indexOfNext){
	var pages = $(".form-slider .form-slider-container .form-slider-page");
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
	var pages = $(".form-slider .form-slider-container .form-slider-page");
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