const prevBtn = document.querySelector(".prevbutton");
const nextBtn = document.querySelector(".nextbutton");
const book = document.querySelector(".book");

const volumeBtn = document.querySelector("#Volume");
const pageBtn = document.querySelector("#GotoPages");
const playBtn = document.querySelector("#PlayPause");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");
const paper13 = document.querySelector("#p13");
const paper14 = document.querySelector("#p14");
const paper15 = document.querySelector("#p15");
const paper16 = document.querySelector("#p16");
const paper17 = document.querySelector("#p17");
const paper18 = document.querySelector("#p18");
const paper19 = document.querySelector("#p19");
const paper20 = document.querySelector("#p20");
const paper21 = document.querySelector("#p21");
const paper22 = document.querySelector("#p22");
const paper23 = document.querySelector("#p23");
const paper24 = document.querySelector("#p24");
const paper25 = document.querySelector("#p25");
const paper26 = document.querySelector("#p26");
const paper27 = document.querySelector("#p27");
const paper28 = document.querySelector("#p28");
const paper29 = document.querySelector("#p29");
const paper30 = document.querySelector("#p30");
const paper31 = document.querySelector("#p31");
const paper32 = document.querySelector("#p32");
const paper33 = document.querySelector("#p33");
const paper34 = document.querySelector("#p34");
const paper35 = document.querySelector("#p35");

var mainVolume = 100;
var voiceVolume = 100;
var pageVolume = 100;

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

volumeBtn.addEventListener("click", volume);
pageBtn.addEventListener("click", pageDialog);
playBtn.addEventListener("click", PlayPause);

let currentLocation = 1;
let numOfPapers = 35;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-160px)";
    nextBtn.style.transform = "translateX(160px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

// Next Page Button
function next() {
    // Reset Time
    voices();

    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1: // Page 1
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 2: // Page 2
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 3: // Page 2
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 4: // Page 2
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 5: // Page 2
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 6: // Page 2
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 7: // Page 2
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 8: // Page 2
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 9: // Page 2
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 10: // Page 10
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 11: // Page 11
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 12: // Page 12
                paper12.classList.add("flipped");
                paper12.style.zIndex = 12;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 13: // Page 13
                paper13.classList.add("flipped");
                paper13.style.zIndex = 13;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 14: // Page 14
                paper14.classList.add("flipped");
                paper14.style.zIndex = 14;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 15: // Page 15
                paper15.classList.add("flipped");
                paper15.style.zIndex = 15;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 16: // Page 16
                paper16.classList.add("flipped");
                paper16.style.zIndex = 16;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 17: // Page 17
                paper17.classList.add("flipped");
                paper17.style.zIndex = 17;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 18: // Page 18
                paper18.classList.add("flipped");
                paper18.style.zIndex = 18;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 19: // Page 19
                paper19.classList.add("flipped");
                paper19.style.zIndex = 19;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 20: // Page 20
                paper20.classList.add("flipped");
                paper20.style.zIndex = 20;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 21: // Page 21
                paper21.classList.add("flipped");
                paper21.style.zIndex = 21;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 22: // Page 22
                paper22.classList.add("flipped");
                paper22.style.zIndex = 22;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 23: // Page 23
                paper23.classList.add("flipped");
                paper23.style.zIndex = 23;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 24: // Page 24
                paper24.classList.add("flipped");
                paper24.style.zIndex = 24;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 25: // Page 25
                paper25.classList.add("flipped");
                paper25.style.zIndex = 25;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 26: // Page 26
                paper26.classList.add("flipped");
                paper26.style.zIndex = 26;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 27: // Page 27
                paper27.classList.add("flipped");
                paper27.style.zIndex = 27;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 28: // Page 28
                paper28.classList.add("flipped");
                paper28.style.zIndex = 28;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 29: // Page 29
                paper29.classList.add("flipped");
                paper29.style.zIndex = 29;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 30: // Page 30
                paper30.classList.add("flipped");
                paper30.style.zIndex = 30;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 31: // Page 31
                paper31.classList.add("flipped");
                paper31.style.zIndex = 31;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 32: // Page 32
                paper32.classList.add("flipped");
                paper32.style.zIndex = 32;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 33: // Page 33
                paper33.classList.add("flipped");
                paper33.style.zIndex = 33;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 34: // Page 34
                paper34.classList.add("flipped");
                paper34.style.zIndex = 34;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                break;
            case 35: // Back
                paper35.classList.add("flipped");
                paper35.style.zIndex = 35;
                closeBook(false);
                document.getElementById("closebook").play();
                document.getElementById("next").style.visibility = "hidden";
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

// Previous Page Button
function prev() {
    // Voices Reset Time
    voices();

    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2: // Front
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 35;
                document.getElementById("closebook").play();
                document.getElementById("prev").style.visibility = "hidden";
                break;
            case 3: // Page 2
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 34;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 4: // Page 3
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 33;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 5: // Page 4
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 32;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 6: // Page 5
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 31;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 7: // Page 6
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 30;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 8: // Page 7
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 29;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 9: // Page 8
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 28;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 10: // Page 9
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 27;
                document.getElementById("prevturnpage").play();
                document.getElementById("shutdown").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 11: // Page 10
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 26;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 12: // Page 11
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 25;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 13: // Page 12
                paper12.classList.remove("flipped");
                paper12.style.zIndex = 24;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 14: // Page 13
                paper13.classList.remove("flipped");
                paper13.style.zIndex = 23;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 15: // Page 14
                paper14.classList.remove("flipped");
                paper14.style.zIndex = 22;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 16: // Page 15
                paper15.classList.remove("flipped");
                paper15.style.zIndex = 21;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 17: // Page 16
                paper16.classList.remove("flipped");
                paper16.style.zIndex = 20;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 18: // Page 17
                paper17.classList.remove("flipped");
                paper17.style.zIndex = 19;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 19: // Page 18
                paper18.classList.remove("flipped");
                paper18.style.zIndex = 18;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 20: // Page 19
                paper19.classList.remove("flipped");
                paper19.style.zIndex = 17;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 21: // Page 20
                paper20.classList.remove("flipped");
                paper20.style.zIndex = 16;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 22: // Page 21
                paper21.classList.remove("flipped");
                paper21.style.zIndex = 15;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 23: // Page 22
                paper22.classList.remove("flipped");
                paper22.style.zIndex = 14;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 24: // Page 23
                paper23.classList.remove("flipped");
                paper23.style.zIndex = 13;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 25: // Page 24
                paper24.classList.remove("flipped");
                paper24.style.zIndex = 12;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 26: // Page 25
                paper25.classList.remove("flipped");
                paper25.style.zIndex = 11;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 27: // Page 26
                paper26.classList.remove("flipped");
                paper26.style.zIndex = 10;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 28: // Page 27
                paper27.classList.remove("flipped");
                paper27.style.zIndex = 9;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 29: // Page 28
                paper28.classList.remove("flipped");
                paper28.style.zIndex = 8;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 30: // Page 29
                paper29.classList.remove("flipped");
                paper29.style.zIndex = 7;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 31: // Page 30
                paper30.classList.remove("flipped");
                paper30.style.zIndex = 6;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 32: // Page 31
                paper31.classList.remove("flipped");
                paper31.style.zIndex = 5;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 33: // Page 32
                paper32.classList.remove("flipped");
                paper32.style.zIndex = 4;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 34: // Page 33
                paper33.classList.remove("flipped");
                paper33.style.zIndex = 3;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 35: // Page 34
                paper34.classList.remove("flipped");
                paper34.style.zIndex = 2;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            case 36: // Page 35
                openBook();
                paper35.classList.remove("flipped");
                paper35.style.zIndex = 1;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                break;
            default:
                throw new Error("unkown state");
        }
        
        currentLocation--;
    }
}

// Play Voices
function voices()
{
    document.getElementById("prevturnpage").currentTime = 0;
    document.getElementById("turnpage").currentTime = 0;
    document.getElementById("closebook").currentTime = 0;

    // Pause Time
    document.getElementById("tada").pause();
    document.getElementById("shutdown").pause();

    // Reset Time
    document.getElementById("tada").currentTime = 0;
    document.getElementById("shutdown").currentTime = 0;

    // Check Main Volume
    if (mainVolume == 100)
    {  
        document.getElementById("tada").volume = mainVolume * 0.01;          // Page 1
        document.getElementById("shutdown").volume = mainVolume * 0.01;      // Page 2
    }
    else if (mainVolume == 1)
    {
        document.getElementById("tada").volume = 0.01;                       // Page 1
        document.getElementById("shutdown").volume = 0.01;                   // Page 2
    }
    else
    {
        document.getElementById("tada").volume = mainVolume * 0.01;          // Page 1
        document.getElementById("shutdown").volume = mainVolume * 0.01;      // Page 2
    }

    // Check Voice Volume
    if (voiceVolume == 100)
    {  
        document.getElementById("tada").volume = voiceVolume * 0.01;          // Page 1
        document.getElementById("shutdown").volume = voiceVolume * 0.01;      // Page 2
    }
    else if (voiceVolume == 1)
    {
        document.getElementById("tada").volume = 0.01;                       // Page 1
        document.getElementById("shutdown").volume = 0.01;                   // Page 2
    }
    else
    {
        document.getElementById("tada").volume = voiceVolume * 0.01;          // Page 1
        document.getElementById("shutdown").volume = voiceVolume * 0.01;      // Page 2
    }

    // Check Page Volume
    if (pageVolume == 100)
    {  
        document.getElementById("prevturnpage").volume = pageVolume * 0.01;
        document.getElementById("turnpage").volume = pageVolume * 0.01;
        document.getElementById("closebook").volume = pageVolume * 0.01;
    }
    else if (pageVolume == 1)
    {
        document.getElementById("prevturnpage").volume = 0.01;
        document.getElementById("turnpage").volume = 0.01;
        document.getElementById("closebook").volume = 0.01;
    }
    else
    {
        document.getElementById("prevturnpage").volume = pageVolume * 0.01;
        document.getElementById("turnpage").volume = pageVolume * 0.01;
        document.getElementById("closebook").volume = pageVolume * 0.01;
    }
}

// Show Volume Dialog
var IsVolumeEnable = false;

function volume(){
    if (IsVolumeEnable == false)
    {
        document.getElementById("idVol").style.visibility = "hidden";
        document.getElementById("vDlg").style.visibility = "visible";
        document.getElementById("Volume").style.opacity = "45%";
        IsVolumeEnable = true;
    }
    else
    {
        document.getElementById("idVol").style.visibility = "visible";
        document.getElementById("vDlg").style.visibility = "hidden";
        document.getElementById("Volume").style.opacity = "75%";
        IsVolumeEnable = false;
    }
}

// Show Volume Dialog
var IsPageEnable = false;

function pageDialog(){
    if (IsPageEnable == false)
    {
        document.getElementById("pDlg").style.left = "0px";
        document.getElementById("pDlg").style.width = "375px";
        document.getElementById("pDlg").style.visibility = "visible";
        document.getElementById("PagesName").style.visibility = "visible";
        document.getElementById("GotoPages").style.opacity = "45%";
        document.getElementById("prevturnpage").play();
        IsPageEnable = true;
    }
    else
    {
        document.getElementById("pDlg").style.width = "0px";
        document.getElementById("pDlg").style.left = "-30px";
        document.getElementById("PagesName").style.visibility = "hidden";
        document.getElementById("GotoPages").style.opacity = "75%";
        document.getElementById("prevturnpage").play();
        IsPageEnable = false;
    }
}

// Play/Pause Pages
var IsPlayEnable = false;

function PlayPause(){
    if (IsPlayEnable == false)
    {
        // Count into 5 pages
        var idk = 0;
        next();

        document.getElementById("imgPlayPause").src = "graphics/pause.png";
        IsPlayEnable = true;

        setTimeout(function()
        {
            idk++;
            if (idk < maxLocation) {
                next();
            }

            alert(idk);
        }, 
        2000);

        if (idk == 3)
        {
            IsPlayEnable = false;
            document.getElementById("imgPlayPause").src = "graphics/play.png";
        }
    }
    else
    {
        document.getElementById("imgPlayPause").src = "graphics/play.png";
        IsPlayEnable = false;
    }
}

// ---------------------------------------------
// Volume Slider
// ---------------------------------------------

// Main Volume
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    mainVolume = parseInt(this.value);
    voiceVolume = parseInt(this.value);
    pageVolume = parseInt(this.value);

    if (mainVolume >= 75 && mainVolume <= 100 )
    {
        document.getElementById("imgVolume").src = "graphics/volume-100%.png";
    }
    else if (mainVolume >= 50 && mainVolume <= 74 )
    {
        document.getElementById("imgVolume").src = "graphics/volume-50%.png";
    }
    else if (mainVolume >= 11 && mainVolume <= 49 )
    {
        document.getElementById("imgVolume").src = "graphics/volume-25%.png";
    }
    else if (mainVolume >= 1 && mainVolume <= 10 )
    {
        document.getElementById("imgVolume").src = "graphics/volume-10%.png";
    }
    else if (mainVolume == 0)
    {
        document.getElementById("imgVolume").src = "graphics/volume-mute.png";
    }
}