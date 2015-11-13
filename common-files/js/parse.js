/* global $,document,console,Parse */
$(document).ready(function() {
    
    var parseAPPID = "xIHVgTWOhipc3h0ij63E8KsSDpbJBBd0RXbzsDS7";
    var parseJSID = "sMndZjTHnFBfTzFNlbFq3oK75egqjV1oynACUSU7";
    
    Parse.initialize(parseAPPID, parseJSID);
    var InterestedObject = Parse.Object.extend("InterestedObject");

    $("#InterestedBuyers").on("submit", function(e) {
        e.preventDefault();

        console.log("Handling the submit");
        //add error handling here
        //gather the form data

        var data = {};
        data.name = $("#name").val();
        data.email = $("#email").val();
        data.city = $("#city").val();

        var interested = new InterestedObject();
        interested.save(data, {
            success:function() {
                console.log("Success");
                //Alerts are lame - but quick and easy
                alert("Thank you! We will get in touch with you soon.");
                
                
            },
            error:function(e) {
                console.dir(e);
            }
        });
        
    });
    
});