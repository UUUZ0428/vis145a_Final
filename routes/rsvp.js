var data = {
  rsvp: ['uzuz@gmail.com']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(request, response){
    var rsvpEmail = request.body.rsvpEmail;
    console.log(rsvpEmail);

    //add to current data
    data.rsvp.push(rsvpEmail);

    //send back data to the browser
    response.send(rsvpEmail);
