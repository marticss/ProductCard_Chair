$(function () {
    $('.more').on('click', add);
    $('.less').on('click', remove);
});

function add() {

    var input = $('.howMany'),
        value = input.val();

    input.val(++value);

    if (value > 0) {
        $('.less').removeAttr('disabled');
    }
}

function remove() {

    var input = $('.howMany'),
        value = input.val();

    if (value > 0) {
        input.val(--value);
    } else {
        $('.less').attr('disabled', 'disabled');
    }
}

function format(number) {
    return number.toString().length === 1 ? "0" + number : number;
}

var price = 320;
var quantity = 1;

$(".more").click(function () {
    quantity++
    update();
})
$(".less").click(function () {
    quantity--;
    update();
})


$(".total").text("$ " + price);

update();

function update() {
    $(".total").text("$ " + price * quantity);
}