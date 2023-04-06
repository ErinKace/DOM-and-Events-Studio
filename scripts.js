// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOffButton = document.getElementById('takeoff');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById('landing');
    const abortMissionButton = document.getElementById('missionAbort');
    let ourRocket = document.getElementById('rocket');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    
    takeOffButton.addEventListener('click', function(takeoff) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        console.log(response);
        if (response) {
        flightStatus.innerHTML="Shuttle in flight."
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML=Number(spaceShuttleHeight.innerHTML)+10000
        }
    });

    landingButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML="The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML=0;
    });

    abortMissionButton.addEventListener('click', function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML="Mission aborted.";
            shuttleBackground.style.backgroundColor = "red";
            spaceShuttleHeight.innerHTML=0;
        }

    });

    downButton.addEventListener("click", function() {
        ourRocket.style.top = parseInt(ourRocket.style.top)+10+"px";
  
    });
    upButton.addEventListener("click", function() {
        ourRocket.style.top = parseInt(ourRocket.style.top)-10+"px";
    });
}
window.addEventListener("load", init);