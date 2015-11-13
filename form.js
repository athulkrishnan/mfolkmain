
$("#register").on("submit", function(e) {
    e.preventDefault();
    /*
    gather the values - normally we'd do a bit of validation, but since UFO chasers
    are known for their rigorous and rational pursuit of science, this will not be necessary
    */
    var report = {};
        report.aname = $("#aname").val();
        report.aemail = $("#aemail").val();
        report.atype = $("#atype").val();
        report.aportfolio = $("#aportfolio").val();
        report.acity = $("#acity").val();
        report.aphone = $("#aphone").val();


    console.log("To report: ",report);
    //ok, disable the form while submitting and show a loading gfx
    $(this).attr("disabled","disabled");
    $("#loadingGraphic").show();

    if(online()) {
        console.log("I'm online, send to parse");
        saveToParse(report,resetForm);
    } else {
        console.log("I'm offline, save to WebSQL");
        db.transaction(function(trans) {
            trans.executeSql("insert into sighting(aname,aemail,atype,aportfolio,acity,aphone) values(?,?,?)", [report.aname, report.aemail, report.atype, report.aportfolio, report.acity, report.aphone]);
        }, errorCB, resetForm);
    }
});


function saveToParse(ob,successCB) {
    var ArtistsDatabase = new ArtistsDatabase();
    ArtistsDatabase.save(ob, {
        success: function(object) {
            console.log("Saved to parse.");
            console.dir(object);
            successCB(object);
        },
        error: function(model, error) {
            console.log("Error!");
            console.dir(error);
        }
    });
}

//handles removing the disabled form stuff and loading gfx
function resetForm() {
    $("#aname").val("");
    $("#aemail").val("");
    $("#atype").val("");
    $("#aportfolio").val("");
    $("#acity").val("");
    $("#aphone").val("");
    $("#register").removeAttr("disabled","disabled");
    $("#loadingGraphic").hide();
    var status = $("#status");
    if(online()) {
        status.fadeIn().html("Your data has been saved!").fadeOut(4000);
    } else {
        status.fadeIn().html("Your data has been saved locally and will be uploaded next time you are online!").fadeOut(4000);
    }
}
