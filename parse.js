/* global $,document,console,Parse */
$(document).ready(function() {
    
    var parseAPPID = "QGZEa7vooXhZyARZmHhkHx2RZQyKzIxpuvYxlfyJ";
    var parseJSID = "IYlxZZjOjPX3gxg1wnyFF42p9HiDOmuuG0zzQZOl";
    
    Parse.initialize(parseAPPID, parseJSID);
    var ArtistsObject = Parse.Object.extend("ArtistsObject");

    $("#artistForm").on("submit", function(e) {
        e.preventDefault();

        console.log("Handling the submit");
        //add error handling here
        //gather the form data

        var data = {};
        data.name = $("#aname").val();
        data.email = $("#aemail").val();
        data.type = $("atype").val();
        data.portfolio = $("#aportfolio").val();
        data.city = $("#acity").val();
        data.phone = $("#aphone").val();

        var artists = new ArtistsObject();
        artists.save(data, {
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