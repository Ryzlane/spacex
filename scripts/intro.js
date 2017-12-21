const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')
let secIntro = 0
const textIntroOne = ` "L'échec est le fondement de la réussite" ` //intro text1
const textIntroTwo = `SpaceX en est l'illustration parfaite `   //intro text1
const textIntroThree = 'Bienvenue sur SpaceXperience'   //intro text1
let textOneOpacity = 0
let textTwoOpacity = 0
let textThreeOpacity = 0
const pressSpace = `Appuyez sur ESPACE pour passer l'introduction ` // text scape intro
let introOpacity = 0
let spaceOpacity = 0
const video = document.querySelector('video') //video intro
let device = 0    // 0 = pc        1 = phone/android etc


/* */
/* RESIZE */ 
const resize = () =>
{
  $canvas.width = window.innerWidth -2
  $canvas.height = window.innerHeight -2  //13800
}

  window.addEventListener('resize', resize)
  resize()

/* RECT */ 
const rect = () =>
{
  context.beginPath() 
  context.rect(0, 0, $canvas.width, ($canvas.height))
  context.fillStyle = ` rgba(34, 38, 41, ${spaceOpacity})`  //1
  context.fill()
}


/* DEVICE */
const deviceChange = () =>
{
    if(navigator.userAgent.match(/(android|iphone|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi))
    {
      device =1
      console.log(device)
    }
  else
  {
    console.log(device)
  }
}
deviceChange()



/* Intro */


const interval = setInterval( increment, 1000)
const intervalTwo = setInterval( incrementTwo, 10)

function increment ()  // gestion of opacity
{
 secIntro++
}

function incrementTwo ()
{
  if(secIntro >= 1 && secIntro <= 3)
  {
    if(textOneOpacity <= 1)
    {
     textOneOpacity += 0.005
    }
  }
  else if(secIntro >= 3 && secIntro<=5)
  {
   textOneOpacity -= 0.005
  }
  else if(secIntro >= 6 && secIntro<=8)
  {
   if(textTwoOpacity <= 1)
    {
     textTwoOpacity += 0.005
    }
  }
  else if(secIntro >= 8 && secIntro<=10)
  {
   textTwoOpacity -= 0.005
  }
  else if(secIntro >= 10 && secIntro<=12)
  {
   if(textThreeOpacity <= 1)
    {
     textThreeOpacity += 0.005
    }
  }
  else if(secIntro >= 12 && secIntro<=14)
  {
   textThreeOpacity -= 0.005
  }
  else if(secIntro >=17)    // aftervideo
    {
     introOpacity += 0.5
     spaceOpacity += 0.030
     textThreeOpacity -= 1
     textOneOpacity -= 1
     textTwoOpacity -= 1
     video.pause()
      if(secIntro >=18)   // swap page after video
      {
       document.location.href="main.html";
      }
    }
  else
    {
    }
  
document.addEventListener('keypress', function(e)  // if he press SPACE skip vidéo
{
  if (e.keyCode == 32)
  {
   textOneOpacity -= 10
   textTwoOpacity -= 10
   textThreeOpacity -= 10 
   secIntro += 10
   introOpacity += 0.5
   spaceOpacity += 1
   video.pause()
   document.location.href="main.html";
  }
},false)
  
  
  
  
  document.addEventListener('touchstart', function(e) // for mobile/iphone 
   {
    textOneOpacity -= 10
    textTwoOpacity -= 10
    textThreeOpacity -= 10 
    secIntro += 100
    introOpacity += 0.5
    spaceOpacity += 1
    video.pause()
  }, false)
  
  if(secIntro>=0 && secIntro <= 17)
  { 
   context.clearRect(0, 0, $canvas.width, $canvas.height)
  } 


}  

const intro = () =>
{
  if(device ==0)
 {
  context.beginPath()
  context.fillStyle= `rgba(250,250,250, ${textOneOpacity})`
  context.font = ` ${window.innerWidth/24}px Oswald`
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillText(textIntroOne, $canvas.width/2, (window.innerWidth/1.7)/3)
  context.fillStyle= `rgba(250, 250, 250, ${textTwoOpacity})`
  context.fillText(textIntroTwo, $canvas.width/2, (window.innerWidth/1.7)/3) 
  context.fillStyle= `rgba(250, 250, 250, ${textThreeOpacity})`
  context.fillText(textIntroThree, $canvas.width/2, (window.innerWidth/1.7)/3)  
  context.fillStyle= 'rgba(250, 250, 250, 1)'
  context.font = ` ${window.innerWidth/50}px Oswald`
   if(secIntro>=0 && secIntro <= 16)
   {
    context.fillText(pressSpace, $canvas.width/2, (window.innerWidth/1.7)/1.4)  
   }
 }
  if(device == 1)   // for iphone/mobile etc swap vidéo
  {
   textOneOpacity -= 10
   textTwoOpacity -= 10
   textThreeOpacity -= 10 
   secIntro += 100
   starsOpacity += 0.5
   spaceOpacity += 1
   video.pause() 
   document.location.href="main.html"; 
  }
}



/* LOOP */


  
const loop = () =>
{
 window.requestAnimationFrame(loop)
 rect()
 intro()
}

loop()