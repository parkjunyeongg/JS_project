//각 이미지 표시 함수
/*const showFlower = () => {
    const imgView1 = document.querySelector("#imgView1");
    imgView1.setAttribute("src","./images/cityFlower.png"); 
    const txtWrap = document.querySelector(".txtWrap") ;
    txtWrap.style.display = "block";
    imgViewText.innerHTML="동백꽃"
}
const showBird = () => {
    const imgView2 = document.querySelector("#imgView1");
    imgView2.setAttribute("src","./images/cityBird.png"); 
    
}
const showFish = () => {
    const imgView3 = document.querySelector("#imgView1");
    imgView3.setAttribute("src","./images/cityFish.png"); 
    
}*/
//어래이 함수
const show = (idx) => {
    const pngName = ['cityFlower','cityBird','cityFish'];
    const txt = ['동백꽃','갈매기','고등어'];

    console.log(pngName[idx],txt[idx]);
    
    const imgView1 = document.querySelector("#imgView1");
    imgView1.setAttribute("src",`./images/${pngName[idx]}.png`); 

    const txtWrap = document.querySelector(".txtWrap") ;
    imgViewText.innerHTML=txt[idx];
    txtWrap.style.display = "block";
}



//DOM 로드 후
document.addEventListener("DOMContentLoaded", () => {
    /*const imgIcon1 = document.querySelector("#imgIcon1");
    const imgIcon2 = document.getElementById("imgIcon2");
    const imgIcon3 = document.querySelector("#imgIcon3");

    imgIcon1.addEventListener("mouseover", ()=>show(0));
    imgIcon2.addEventListener("mouseover", ()=>show(1));
    imgIcon3.addEventListener("mouseover", ()=>show(2));*/

    const imgIconItems=document.querySelectorAll(".imgIconItem");
    for (let [k,item] of imgIconItems.entries()){
        item.addEventListener("mouseover", () => show(k));
    }
});