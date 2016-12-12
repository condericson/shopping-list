$(document).ready(function() {

var state = {
	items: []
};

// For adding items to list
var addItem = function(state, item) {
	state.items.push(item);
}

var renderList = function(item, element) {
		var itemsHTML = '<li>' + 
		'<span class="shopping-item">' + item + '</span>' + 
		'<div class="shopping-item-controls">' + 
	          '<button class="shopping-item-toggle">' + 
	            '<span class="button-label">check</span>' + 
	          '</button>' + 
	          '<button class="shopping-item-delete">' + 
	            '<span class="button-label">delete</span>' + 
	          '</button>' + 
	        '</div>' + 
	      '</li>';
	element.append(itemsHTML);
};

$('#js-shopping-list-form').submit(function(event){
	var userInput = $('#shopping-list-entry').val(); 
	event.preventDefault();
	addItem(state, userInput);
	renderList(userInput, $('.shopping-list'));
});

// deleting items
var remove = function(state, element) {
		var index = state.items.indexOf(element);
		state.items.splice(index, 1);
	}

$('.shopping-list').on('click', '.shopping-item-delete', function(event){
	var element = $(this).closest('li').find('.shopping-item').html();
	remove(state, element);
	this.closest("li").remove();
});

// checking items off -- Need help with this portion
var check = function(state, element) {
		state.items.toggleClass('.shopping-item__checked');
	};

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
	var element = $(this).closest('li').find('.shopping-item');
	console.log(element);
	$(element).toggleClass('shopping-item__checked');
});
























});