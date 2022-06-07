let getData=async (url)=>{
    let res=await fetch(url)
   let data= await res.json();
   return data;
}

let append=(data,container)=>{

    // let container=document.getElementById("container");

    data.forEach((el)=>{
        let div=document.createElement("div");
        div.setAttribute("id","div")
        let p=document.createElement("h3")
        let img=document.createElement("img");
        p.innerText=el.title;
        img.src=el.image;
        div.append(img,p);
        container.append(div);

    })

}

export {getData,append}