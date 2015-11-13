/* global $,document,console,Parse */
$(document).ready(function() {
    
    var parseAPPID = "TBZZpA3H81eTp29GGOx0GPuoWOvmsInVFiMpeHrJ";
    var parseJSID = "0OI2il4Z2ZEDb1uiFWvN340pft9QbjhcHGYEOkwT";
    
    Parse.initialize(parseAPPID, parseJSID);
    var MainContactFormObject = Parse.Object.extend("MainContactFormObject");

    $("#PartnerContact").on("submit", function(e) {
        e.preventDefault();

        console.log("Handling the submit");
        //add error handling here
        //gather the form data

        var data = {};
        data.pcname = $("#pcname").val();
        data.pcemail = $("#pcemail").val();
        data.pcmessage = $("#pcmessage").val();

        var maincontact = new MainContactFormObject();
        maincontact.save(data, {
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