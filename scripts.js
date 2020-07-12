// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById("shuttleBackground");
    takeoff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    up = document.getElementById("up");
    down = document.getElementById("down");
    left = document.getElementById("left");
    right = document.getElementById("right");
    rocket = document.getElementById("rocket");
    rocket.style.position = "relative";
    
   
   
    takeoff.addEventListener("click",function(){
     let response =   window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response){
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = 10000;
        } else {
            flightStatus.innerHTML = "Space shuttle ready for takeoff";
        }
});

landing.addEventListener("click",function(){
     window.alert("The shuttle is landing. Landing gear engaged.");
     flightStatus.innerHTML = "Shuttle has landed.";
     shuttleBackground.style.background = "green";
     spaceShuttleHeight.innerHTML = 0;
     
});

missionAbort.addEventListener("click", function(){
    let response = window.confirm("Confirm that user wants to abort mission.");
    if(response){
        flightStatus.innerHTML = "Mission Aborted"
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
});
up.addEventListener("click",function(){
    let rocketPosition = Number(rocket.style.top.slice(0,length-2));
    rocket.style.top = rocketPosition - 10 + "px"
   ;
});

down.addEventListener("click",function(){
    let rocketPosition = Number(rocket.style.top.slice(0,length-2));
    rocket.style.top = rocketPosition + 10 + "px"
   ;
});
left.addEventListener("click",function(){
    let rocketPosition = Number(rocket.style.left.slice(0,length-2));
    rocket.style.left = rocketPosition - 10 + "px"
   ;
});
right.addEventListener("click",function(){
    let rocketPosition = Number(rocket.style.left.slice(0,length-2));
    rocket.style.left = rocketPosition + 10 + "px"
   ;
})
}



window.onload = init;