//task 1

$(function() {
    $('h2.head').css('background-color', 'green');
    $('h2.head .inner').css('font-size', '35px');
});  

//task 2

$(function() {
    $('a[href^="https://"]').attr('target', '_blank');
});

//task 3

$('h3 + div').each(()=>{
    $(this).insertBefore($(this).prev('h3'));
});

//task 4

$(function() {
    const checkboxes = $('input[type="checkbox"]');
    checkboxes.on('change', () => {
        let checkedCheckboxes = $('input[type="checkbox"]:checked');
        if (checkedCheckboxes.length === 3){
            checkboxes.attr('disabled', 'true');
        }
    })
})