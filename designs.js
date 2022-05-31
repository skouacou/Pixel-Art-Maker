// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})


function makeGrid(x , y) {
    $('tr').remove();

    // Your code goes here!
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '>< /tr>');
        for (var l = 1; l <= y; l++) {
            $('#table' + i).append('<td></td>');
        }
    }

    // Add the color to the cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
