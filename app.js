let useroutput = document.getElementById("useroutput");


function search_moots() {
    useroutput.innerHTML = "";
   
    var video1 = document.createElement("video");
    var video2 = document.createElement("video");
    let moot_name = document.getElementById('moot_nm').value;
    console.log(moot_name);
    // console.log(useroutput);
    var sourceMP4 = document.createElement("source");
    var sourceother = document.createElement("source");
    sourceMP4.src = "";
    sourceother.src = "";
    video1.autoplay = video2.autoplay = true
    video1.controls = video2.controls = true;
    video1.muted =  video2.muted = false;
    video1.loop = video2.loop = true;
    // video1.height = 240; // in px
    // video1.width = 320;
    // sourceMP4.type = "video/mp4";

    let div = document.createElement('div');
    let video_div = document.createElement('div');
    video_div.classList.add("video_div");
    let breaker =  document.createElement('br');

    if ((moot_name.match(/be.*/) || moot_name.match(/Be.*/) || moot_name.match(/bE.*/)) || moot_name.match(/BE.*/)) {
        console.log("Becca");
        div.innerText = "I know its you Becca!!!";
        sourceMP4.src = "videos/You_Monkey.mp4";

        sourceother.type = "video/webm";
        sourceother.src = "videos/laughingMonkey.webm"
        video2.appendChild(sourceother);
        video_div.append(video2);
        

    } else if ((moot_name.match(/al.*/) || moot_name.match(/Al.*/) || moot_name.match(/aL.*/)) || moot_name.match(/AL.*/)) {
        console.log("Alfie");
        div.innerText = "I know its you Alfie!!!";
        sourceMP4.type = "video/webm";
        sourceMP4.src = "videos/Beyonce.webm";

    } else {
        console.log("Invalid");
        div.innerText = "Invalid";
    }
    video_div.appendChild(breaker);
    video1.appendChild(sourceMP4);
    video_div.appendChild(video1);
    useroutput.appendChild(div);
    useroutput.appendChild(video_div);
    console.log(video_div);
}