//ab hume js ka use karke event ko apply karna hai

function changeText(){
//function banaye text change ka
    fpara.textContent = "badhiya hai bahi"
}
let fpara = document.getElementById('fpara');
// fpara ko get karke addeventlister se click karne par function ko call kar diye
//click event hone par text change ho jayega
fpara.addEventListener('click' ,changeText);
// you can remove the event also
// fpara.removeEventListener('click' ,changeText);

//anchor tag ka default kam hota hai link pe le jana agar usko rokna hai to preventadefault ka use kar lo
let anchorelement = document.getElementById('fanchor');


anchorelement.addEventListener('click',function(event){
   event.preventDefault();
//    ab anchor ckick hone par ye show kar dega
   anchorelement.textContent = "click done hai bahi"
});

// MUltiple tags pe ek sath event lister add kar sakter hai
let paras = document.querySelectorAll('p');
for(let i = 0 ; i<paras.length; i++){
    let para = paras[i];
    para.addEventListener('click', function(){
        alert("you have clicked on para :" +(i+1) );
    })
}
//above is bad practice
function alertpara(event){
    //if yoou want to show alrt on any spicfic tag click you can use if
    if(event.target.nodeName === 'SPAN'){
        alert("you have clicked on span:"+event.target.textContent);
    }
    alert("you have clicked on para :" + event.target.textContent);
    //event.target ka use hai ki jis target pe click karoge sirf usme jo event add hoga usi ko show karega
}

for(let i = 0 ; i<paras.length; i++){
    let para = paras[i];
    para.addEventListener('click', alertpara );
}

//agar sab pe same tarah ka event add karna ho to div pe laga do

let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertpara);



