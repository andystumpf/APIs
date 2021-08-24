$('#update-privs-after-migration').on('click', function () {
    var teamId = Hudl.data.currentTeamId;
    var featureToAdd1 = 588;
    var featureToAdd2 = 500;
    $.mvcPost('/TeamFeatures/Add', {
        feature: featureToAdd,
        teamIds: '[' + teamId + ']'
    }).done(function () {
        $.mvcPost('/TeamFeatures/Add', {
            feature: featureToAdd2,
            teamIds: '[' + teamId + ']'
        }).done(function () {
            alert('Feature added');
        }).fail(function () {
            alert('Error adding feature');
        });
    }).fail(function () {
        alert('Error adding feature');
    });
});