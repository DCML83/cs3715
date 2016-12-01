$(document).ready(function () {
    $(document).on('mouseenter', '#gitHub_button', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '#gitHub_button', function () {
        $(this).find(":button").hide();
    });
});