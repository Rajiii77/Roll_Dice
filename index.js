function rolling(){
    let dice=document.getElementById("dice").value;
    let numres=document.getElementById("numres");
    let imgres=document.getElementById("imgres");
    let val=[];
    let img=[];

    for(let i=0; i<dice; i++){
        let values=Math.floor(Math.random() * 6) + 1;
        val.push(values);
        img.push(`<img src="dice_img/${values}.png">`)
       

    }
    numres.textContent=val.join(',');
    imgres.innerHTML=img.join(',');

   

}