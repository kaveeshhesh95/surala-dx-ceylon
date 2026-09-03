$(document).ready(function() {
    $('#div1').hide();
    $('#div2').hide();
    $('input[name="exampleRadios"]').change(function() {
        if ($(this).val() === 'option1') {
            $('#div1').show();
            $('#div2').hide();
        } else if ($(this).val() === 'option2') {
            $('#div1').hide();
            $('#div2').show();
        }
    });
});