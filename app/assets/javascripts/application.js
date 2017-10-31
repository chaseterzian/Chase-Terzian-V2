// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function() {

	$('#chase-terzian').hide();
	
	$('#the-source').hide();
	
	$('#landing-link-buttons').hide();
	
	$('#landing-site-buttons').hide();
	
	$('hr').hide();
	
	$('.bg1').hide();
	
	$('#resume-button-landing').hide();

	$('.bg1').fadeIn(3000);
	
	$('#chase-terzian').fadeIn(3000);
	
	setTimeout(function() {
		$('#the-source').fadeIn(3000);
	},400);
	
	setTimeout(function() {
		$('#landing-link-buttons').fadeIn(3000);
		$('hr').fadeIn(3000);
	},800);
	
	setTimeout(function() {
		$('#landing-site-buttons').fadeIn(3000);
	},1200); 

	$('#code-projects-page').hide();
	$('#code-projects-page').fadeIn(1000);

	$('#gearbox-sect').hide();
	$('#gearbox-sect').fadeIn(1000);

	$('#the-projects-sect').hide();
	$('#the-projects-sect').fadeIn(1000);

	$('#whiteboard-sect').hide();
	$('#whiteboard-sect').fadeIn(1000);

	$('#music-page-section').hide();
	$('#music-page-section').fadeIn(1000);

	$('#media-page-section').hide();
	$('#media-page-section').fadeIn(1000);

	$('#other-resources-page-section').hide();
	$('#other-resources-page-section').fadeIn(1000);

	$('#contact-page-section').hide();
	$('#contact-page-section').fadeIn(1000);

});