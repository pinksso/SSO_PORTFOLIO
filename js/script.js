//mouse
$(window).mousemove(function(){
    $("#cursor>img").css({
        width: '50px',  
        position: 'absolute', 
        zIndex : '9999',  
        transform:'rotate(-15deg)',
        left: event.pageX+5,  
        top: event.pageY+5,  
    });
});




//****full_page****//
//full_page
function fullpageActivate(){
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
        css3: true,
        scrollingSpeed: 1000,
        navigation: true,
        slidesNavigation: true,
        responsiveHeight: 330,
        dragAndMove: true,
        dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
        controlArrows: false,
        anchors: ['anchor1', 'anchor2', 'anchor3','anchor4','anchor5','anchor6','anchor7'],
        menu: '#menu'
    });
}
fullpageActivate();

//responsive_page
$(window).resize(function(){
    if($(this).width() <= 1100){
        fullpage_api.destroy('all');
    }else{
        fullpageActivate();
    }
});

$(window).trigger('resize');
//****full_page****//




//****menu****//
//menu li hover ~ submenu slideDown
$(function(){
    $('#menu li').mouseover(function(){
        $(this).find('.sub',this).stop(true).slideDown(700);
    }).mouseout(function(){
        $(this).find('.sub').stop(true).slideUp(700);
    });
});
//****menu****//




//****fix_icon_navi****//
//toggle ~ display nav
function ToggleMenu(){
    const menutoggle = document.querySelector('#toggle');
    const navigation_ham = document.querySelector('.nav');
    menutoggle.classList.toggle('active')
    navigation_ham.classList.toggle('active')
}
//****fix_icon_navi****//




//****s1****//
//form_box
VanillaTilt.init(document.querySelector(".main_box"), {
    max: 15,
    speed: 400,
    glare:true,
});

///typing
const $text = document.querySelector(".typing");
// 글자 모음 - 개행문자(\n)로 줄바꿈
const letters = [
    "어디서든 잘 자라는"
    //"HTML \n 줄바꿈 타이핑!",
    //   "CSS \n 웹 스타일~", 
    //   "JavaScript \n Typing Test!"
];

// 글자 입력 속도
const speed = 400;
let i = 0;

// 줄바꿈을 위한 <br> 치환
const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
}

// 타이핑 효과
const typing = async () => {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
    }
    // 잠시 대기
    await wait(3500);
    // 지우는 효과
    remove();
}
// 글자 지우는 효과
const remove = async () => {
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    while (letter.length) {
    await wait(speed);
    letter.pop();
    $text.innerHTML = letter.join(""); 
    }
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}
// 초기 실행
setTimeout(typing, 1500);
//****s1****//




//****s4****//
//button ~ view
function show(){
    const menutoggle = document.querySelector('#view');
    const navigation_ham = document.querySelector('.overlay');
    menutoggle.classList.add('active')
    navigation_ham.classList.add('active')
}
//****s4****//




//****loading****//
//counter
// function counter(){
//     var countss = setInterval(function(){
//         var c = parseInt($('.counter').text());
//         $('.counter').text((++c).toString());
//         if (c == 100){
//             clearInterval(countss);
//             // $('.counter').addclass('hide')
//             $('.preloader').addclass('active2')
//         }
//     },40)
// }
// counter()

$(window).on('load', function () {
    $(".preloader").fadeOut(3500);
});
