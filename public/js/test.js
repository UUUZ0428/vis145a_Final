$(document).ready(function() {
	initializePage();
})

function initializePage() {
	//in main page
	$(".back").click(backClick);
    $(".profile").click(ProfileClick);
    $(".collection").click(CollectionClick);
    $(".group").click(GroupClick);
	//in profile page
	$(".backProfile").click(backProfileClick);
	$(".account").click(AccountClick);
	$(".achievement").click(Achievementlick);
	$(".record").click(RecordClick);
	$(".settings").click(SettingsClick);

	initMap();
	initRSVPForm();

}

function backClick(e) {
    window.location.href='/';
}

function backProfileClick(e) {
    // prevent the page from reloading
    window.location.href='/PPH';
}

function CollectionClick(e) {
    window.location.href='CPH';
}

function ProfileClick(e) {
    window.location.href='PPH';
}

function SearchClick(e) {
    window.location.href='search';
}

function GroupClick(e) {
    window.location.href='GPH';

}

function AccountClick(e) {
    // prevent the page from reloading
    window.location.href='APH';
}

function Achievementlick(e) {
    // prevent the page from reloading
    window.location.href='AchPH';
}

function RecordClick(e) {
    // prevent the page from reloading
    window.location.href='RPH';
}

function SettingsClick(e) {
    // prevent the page from reloading
    window.location.href='SPH';
}

function ProfileGroupClick(e){
	// prevent the page from reloading
    window.location.href='APH';
}


// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e){
      e.preventDefault();
      console.log("submitting form..")
      var rsvpEmail = $('#rsvpEmail').val();
      //send the POST request
      $.post('addRSVP', { rsvpEmail: rsvpEmail }, postCallback);
  });

  function postCallback(res){
      alert("RSVP form successfully submitted!");
      //clear form
      $('#rsvpEmail').val('');
  }
}
