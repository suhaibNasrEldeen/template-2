let icon=document.getElementsByClassName("icon");
icon[0].onclick=function(){
    icon[0].classList.toggle("first");
}
// if(icon[0].hasAttribute==='first'){
//     console.log("yes");
// }else if(icon[0].hasAttribute!=='first'){
//     console.log("none");
// };

let body=document.body;
body.onclick=function(){
    if(icon[0].hasAttribute==='first'){
        console.log("yes");
    }else if(icon[0].hasAttribute!=='first'){
        console.log("none");
    };
}