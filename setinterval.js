// let count = 0;
// const nav = ["네이버","다음","구글","ㅇㅇㅇ","윤여선","초코"];

// setInterval(function(){
//     console.log(nav[count]);
//     count ++;
    
//     count %= nav.length;
    
// },500)



// //자바 스크립트 경로는 css와 다르다 연결된 html기준으로 처리해야 한다.

//  let count = 2;
//  setInterval(function(){

//     count++;
//     count %= 6;
//     document.querySelector("#bannerimg").setAttribute("src",`/banner/${count}.jpg`);

//  },1000);



const bannerdata = [
   "/banner/1.jpg",
   "/banner/2.jpg",
   "/banner/3.jpg",
   "/banner/4.jpg",

];



let num = 0;

const bannerWrap = document.querySelector(".bannerwrap");
const bannerImg = document.querySelector("#bannerimg");
const bannerButton = document.querySelector(".bannerwrap button");

function updateBanner() {
    bannerWrap.style.background = `url(${bannerdata[num]}) center no-repeat`;
    bannerImg.setAttribute("src", bannerdata[num]);
}

function startAutoBanner() {
    return setInterval(function() {
        num = (num + 1) % bannerdata.length;
        updateBanner();
    }, 3000);
}

let autoBanner = startAutoBanner();

bannerButton.addEventListener('click', function() {
    clearInterval(autoBanner);
    bannerButton.innerHTML = "PLAY";
});

// 초기 배너 설정
updateBanner();
