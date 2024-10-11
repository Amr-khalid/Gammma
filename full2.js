let blur=document.getElementById("blur")
let contrast=document.getElementById("contrast")
let brightness=document.getElementById("brightness")
let sepia=document.getElementById("sepia")
let grayscale=document.getElementById("grayscale")
let hueRotete=document.getElementById("hue-rotate")
let reset=document.getElementById("reset")
let download=document.getElementById("ture")
let img=document.getElementById("img")
let file=document.getElementById("file")
const canvas=document.getElementById("canvas")
const ctx=canvas.getContext('2d')
let mood='cr'
let tem;

file.onchange=function()
  {img.src=URL.createObjectURL(file.files[0])
scrollby({left:86})
  }
img.onload=()=>{canvas.width=img.width
canvas.height=img.height
ctx.drawImage(img,0,0,canvas.width,canvas.height)
}




let loopp=document.querySelectorAll("input")
loopp.forEach(element=>
  {element.addEventListener("input",function(){img.style.filter=` blur(${blur.value}px)
brightness(${brightness.value}%)
contrast(${contrast.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
hue-rotate(${hueRotete.value}deg) `
ctx.filter=` blur(${blur.value}px)
brightness(${brightness.value}%)
contrast(${contrast.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
hue-rotate(${hueRotete.value}deg) `
ctx.drawImage(img,0,0,canvas.width,canvas.height)

}

)}
)
download.onclick=()=>{download.href=canvas.toDataURL()}















function s(){
  ctx.filter=`none`
  img.style.filte='none'
  blur.value='0'
  brightness.value='100'
  contrast.value='100'
  sepia.value='0'
  grayscale.value='0'

  //hue-rotate.value='5'
    
}





reset.onclick=function(){s()}
/*

 function sd(f,i,n){
f.onchange=function(){
//s()
canvas.createObjectURL(file.files[0])




    i.src=URL.createObjectURL(f.files[0])
    sessionStorage.setItem(n,URL.createObjectURL(f.files[0]))
    i.src=sessionStorage.getItem(n)
}
canvas.height=img.height
canvas.width=img.width
img.onload=()=>{ctx.drawImage(img,0,0,canvas.height,canvas.width)
}




onload=function(){
if(sessionStorage.getItem(n))
i.src=sessionStorage.getItem(n)
}
}
sd(file,img,"v")
let loop=document.querySelectorAll("input")
loop.forEach(element=>{element.addEventListener("input",function()
  {
    img.style.filter=` 
      blur(${blur.value}px)
brightness(${brightness.value}%)
contrast(${contrast.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
hue-rotate(${hueRotete.value}deg)`

ctx.filter=`blur(${blur.value}px)
brightness(${brightness.value}%)
contrast(${contrast.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
hue-rotate(${hueRotete.value}deg)`
 ctx.drawImage(img,0,0,canvas.width,canvas.height)
  }
)}

)
ctx.drawImage(img,0,0,img.width,img.height)

download.onclick = function() {download.href=canvas.toDataURL()}*/
//end edit--------------------------------------------------------------------------------------------------------------------------------------->
let addtext=document.getElementById("addtext")
let bnadd=document.getElementById("bnadd")

let datepro;
if(localStorage.pro!=null)
    {datepro=JSON.parse(localStorage.pro)}
else{datepro=[]}



function res(){addtext.value=''}

bnadd.onclick=function(){
 if(addtext.value!=''){

  if(mood=='cr'){datepro.push(addtext.value)
  }
else{
  datepro[tem]=addtext.value
  bnadd.innerHTML='اضاقة'
   mood=='cr'
}
show()
}
else{alert("ادخل مهمتك")
}
localStorage.setItem('pro',JSON.stringify(datepro))

document.documentElement.style.setProperty('--color2','gold')


res()
show()
} 
function rr(){
document.documentElement.style.setProperty('--color2',"#129f6c")
mood=="cr"
location.reload()
}


function show()
    {let si;
        for(let i=0;i<datepro.length;i++)
        {si+=`<div class="p">
${datepro[i]}
<div>
<i class="fa fa-remove" onclick="del(${i})" id="remove"></i>
<i class="fa fa-edit" onclick="update(${i})" id="edit"></i>
<i class="fa fa-check" id="check" onclick="rr()"></i>

</div>
</div>
`


        }    
let dell=document.getElementById("dell")
        if(datepro.length>0)
          {

            dell.innerHTML=` <button onclick="delall()">Delete All</button>`
          }
          else{dell.innerHTML=''}
document.getElementById("add").innerHTML=si
    }

function delall()
  {localStorage.clear()
    datepro.splice(0)
    res()
    show()
  }

function del(i)
  {datepro.splice(i,1)
    localStorage.pro=JSON.stringify(datepro)
    console.log(i)
    document.documentElement.style.setProperty('--color2','red')
res()
    show()
  }
  
function update(i)
{
  addtext.value=datepro[i]
  mood='up'
  tem=i
  bnadd.innerHTML='تعد يل'
document.documentElement.style.setProperty('--color2','black')
addtext.focus()
show()
}
  show()
//===========================end todo============================//
let tnum=document.getElementById("tnum")
let jnum=document.getElementById("jnum")
let one=document.querySelector(".one")
let buttom=document.getElementById("buttom")
let buttom2=document.getElementById("buttom2")
let clod;
let trr;
let table;
let date=[]
let date2=[]
for(let i=0;i<jnum.value;i++)
  {
    clod+=`<input type="text" placeholder=" ${i+1}عضووووق" "id="t${i}" onblur="a(this.value)">
`
  }

function b(value){date2.push(value)}

function a(value){date.push(value)
  
}

//end======================>
buttom2.onclick=()=>
  { 
    for(let i=0;i<(jnum.value*tnum.value);i++)
      {
        clod+=`<input type="text" placeholder=" ${i+1}عضو" "id="t${i}" onblur="b(this.value)" class="ti">
    `
      }
    
for(let i=0;i<tnum.value;i++)
  {
    clod+=`<input type="text" placeholder="${i+1}:الفريق "id="t${i}" onblur="a(this.value)" class="ti2">
`
  }
document.getElementById("clod").innerHTML=clod
  }
buttom.onclick=()=>{
  for(let i=0;i<tnum.value;i++)
{
    table+= `
    <tr>
        <td class="one">${date[i]}</td>
</tr>
  
    `
}
let tfo;
for(let i=0;i<(jnum.value*tnum.value);i++)
  {
      tfo+= `
      <tr>
          <td >${date2[i]}</td>
  </tr>
    
      `
  }
  document.getElementById("tfo").innerHTML=tfo


  console.log("ghada")
    document.getElementById("table").innerHTML=table}
//mean
let s1=document.getElementById("s1")
let s2=document.getElementById("s2")
let s3=document.getElementById("s3")
let s4=document.getElementById("s4")
let sh=document.getElementById("sh")
let condo=document.querySelector(".condo")
let conp=document.querySelector(".conp")
let conrandom=document.querySelector(".conrandom")
let xx=document.querySelector(".x")
let lol=document.getElementById("lol")
lol.onclick=()=>{location.reload()}

s1.onclick=()=>{
  lol.style.display='flex'
sh.style.display='none'
condo.style.display='flex'
conp.style.display='none'
conrandom.style.display='none'
document.body.style.cssText=`background-image: url(s4.jpg);`

}
s2.onclick=()=>{
  lol.style.display='flex'

  sh.style.display='none'
  condo.style.display='none'
  conp.style.display='flex'
  conrandom.style.display='none'
  if(localStorage.h==null)
  {document.body.style.cssText=`background-image: url(s3.jpg);`}

  }
  s3.onclick=()=>{
    lol.style.display='flex'
      document.body.style.cssText=`background-image: url(s5.jpg);`

    sh.style.display='none'
    condo.style.display='none'
    conp.style.display='none'
    conrandom.style.display='flex'
    }
    s4.onclick=()=>{
      lol.style.display='flex'

      xx.style.display='flex'
      document.body.style.cssText=`background:linear-gradient(210deg, rgb(25 54 105), rgb(72 189 221));
`
      }
let fg=document.getElementById("ggg")
/*
function sg(g,p,a){
g.onchange=function()
{p.src=URL.createObjectURL(g.files[0])
localStorage.setItem(a,URL.createObjectURL(g.files[0]))
p.src=localStorage.getItem(a)
document.body.style.cssText=`background-image: url(${URL.createObjectURL(g.files[0])})`

}
}*/



function sg(fileInput, storageKey) {
  fileInput.onchange = function() {
    const fileURL = URL.createObjectURL(fileInput.files[0]);
    document.body.style.backgroundImage = `url(${fileURL})`;
    localStorage.setItem(storageKey, fileURL);
  };
}
if(true){
const fileInput = fg;
const storageKey = "h";

sg(fileInput, storageKey);

onload = () => {
  const storedURL = localStorage.getItem(storageKey);
  if (storedURL) {
    document.body.style.backgroundImage = `url(${storedURL})`;
  }
};}
localStorage.clear()