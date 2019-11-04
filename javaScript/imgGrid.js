let images=["../images/im1.jpg","../images/im1.jpg","../images/abs (34).jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im14.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im1.jpg","../images/im12.jpg","../images/im13.jpg","../images/im1.jpg"];

$(document).ready(function(){

    
    let s=images.length;
    let colSize=Math.ceil(s/4);
    console.log(s);

    var row=document.getElementById("imagesSection");
    // let col=document.createElement("div.imgGrid-column-4");
    // row.appendChild(p);
    let col=document.getElementsByClassName("imgGrid-column-4");
    let k=0;
    for(let i=1;i<=s;i++)
    {
        let imageContainer=document.createElement("div");
     
        imageContainer.classList.add("imageModal");
        imageContainer.classList.add("imageContainer");
        let myImg=document.createElement("div");
        myImg.classList.add("myImg");
      
        let img=document.createElement("img");
        img.setAttribute("src",images[i-1]);
        img.setAttribute("onclick","changeImg(this)");
        myImg.appendChild(img);
        imageContainer.appendChild(myImg);

        let overlay=document.createElement("div");
        overlay.classList.add("overlay");
        let favIcon=document.createElement("i");
        favIcon.classList.add("material-icons");
        favIcon.innerHTML="favourite_border";
        favIcon.style.cursor="pointer";
        overlay.appendChild(favIcon);
        imageContainer.appendChild(overlay);

        
        col[k].appendChild(imageContainer);

        //col[k].appendChild(myImage);

        if(i%colSize==0 && i!=0)
        {k++;}
    }
});


function changeImg(event){

    let modalImageHero= document.querySelector("#modalImageHero");
    let mod=document.querySelector("#mod");
    
    modalImageHero.setAttribute("src",event.getAttribute("src"));
    mod.style.display="block";
    console.log("Modal visible")

}

$(document).ready(function(){
    let closeBtn=$(".modalImagecloseBtn");
    closeBtn.click(function(){
        let mod=$("#mod");
        mod.css({"display":"none"});
    })
})