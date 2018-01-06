//$(document).ready(function () {
//    //$('.submenu').addClass('move');
//    //$('aside > ul > li > a').removeClass('active');
//});


//$(document).on('click', 'aside ul > li > a', function () {
//    debugger;
//    let _this = this;
//    //$('.submenu').removeClass('move');
//    if ($(_this).hasClass("active")) {
//        if ($(_this).siblings().hasClass("move")) {
//            alert('Yes Move class');
//            $(_this).siblings().removeClass('move');
//        }
//        else {
//            $(_this).siblings().addClass('move');
//        }
//    }
//    else {
//        console.log('Non Active');
//        //$('aside ul li a').removeClass('active');
//        //$('aside ul > li > a').siblings().removeClass('move');
//        //$(this).addClass('active');
//        //$(this).siblings().addClass('move');
//    }
//});


$(document).on("click", 'aside ul > li > a', function () {
    let _this = this;
    let isSiblingOpen = $(_this).siblings().hasClass('move');
    let isOpen = $('.submenu').parent().find('.move').length == 1;
    $('.submenu').removeClass('move');
    if ($(_this).hasClass("active")) {
        if (isOpen && isSiblingOpen) {
            $(_this).siblings().removeClass('move');
        }
        else {
            $(_this).siblings().addClass('move');
        }
    }
});

//$(document).on('keydown', 'aside', function (e) {
//    var keyCode = e.keyCode || e.which;
//    alert(keyCode);
//    if (keyCode == 9) {
//        e.preventDefault();
//        // call custom function here
//        alert('Yes Tab Key Press');
//        if (keyCode == 13) {
//            alert('Yes Enter Key Press');
//        }
//        alert('Yes Tab Key Press');
//    }
//    else {
//        alert('No');
//    }
//});

//$(document).keydown(function (e) {
//    switch (e.which) {
//        case 37: // left
//            break;

//        case 38: // up
//            break;

//        case 39: // right
//            break;

//        case 40: // down
//            break;

//        default: return; // exit this handler for other keys
//    }
//    e.preventDefault(); // prevent the default action (scroll / move caret)
//});

//$('input, select').on('blur', function () {
//    if ($(this).val().trim() != '') {
//        $(this).addClass('validControl');
//    }
//    else {
//        $(this).removeClass('validControl');
//    }
//});

$(document).on('click', '.fa-close.float-right', function () {
    $(this).parents('ul.dropdown-submenu').first().empty();
});
$(document).on('click', 'section, nav', function () {
    //$('aside ul li a').removeClass('active');
    $('.submenu').removeClass('move');
});
//

$(document).on('click', '#closeGlobalModal', function () {
    $('#globalModal').hide();
    $('.modal').hide();
    $('#globalModal').addClass('fade');
});
