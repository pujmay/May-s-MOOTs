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
        

    } else if ((moot_name.match(/alf.*/) || moot_name.match(/Alf.*/) || moot_name.match(/aLF.*/)) || moot_name.match(/ALF.*/)) {
        console.log("Alfie");
        div.innerText = "I know its you Alfie!!!";
        sourceMP4.type = "video/webm";
        sourceMP4.src = "videos/Beyonce.webm";

    }else if ((moot_name.match(/anne.*/) || moot_name.match(/Anne.*/) || moot_name.match(/aNNE.*/)) || moot_name.match(/ANNE.*/)) {
        console.log("Anne");
        div.innerText = "I know its you French gal from Réunion Anne !!!";
        sourceMP4.src = "videos/French_Shy_anne.mp4";

    } else if ((moot_name.match(/ann.*/) || moot_name.match(/Ann.*/) || moot_name.match(/aNN.*/)) || moot_name.match(/ANN.*/)) {
        console.log("Annie");
        div.innerText = "I know its you Annie!!!";
        sourceMP4.src = "videos/Ten_Annie.mp4";

    } else if ((moot_name.match(/ale.*/) || moot_name.match(/Ale.*/) || moot_name.match(/aLE.*/)) || moot_name.match(/ALE.*/)) {
        console.log("Alessia");
        div.innerText = "I know its you Alessia!!!";
        sourceMP4.src = "videos/V-Alessia.mp4";

    } else if ((moot_name.match(/ek.*/) || moot_name.match(/Ek.*/) || moot_name.match(/ek.*/)) || moot_name.match(/EK.*/)) {
        console.log("Ekjot");
        div.innerText = "I know its you Ekjot!!!";
        sourceMP4.src = "videos/punjabi-ekjot.mp4";

    } else if ((moot_name.match(/sa.*/) || moot_name.match(/sA.*/) || moot_name.match(/Sa.*/)) || moot_name.match(/SA.*/)) {
        console.log("Sai");
        div.innerText = "I know its you Sai!!!";
        sourceMP4.src = "videos/sai.mp4";

    } else if ((moot_name.match(/pa.*/) || moot_name.match(/Pa.*/) || moot_name.match(/pA.*/)) || moot_name.match(/PA.*/) || moot_name.match(/aniket.*/) || moot_name.match(/Aniket.*/)){
        console.log("Patronus");
        div.innerText = "I know its you Patronus Aniket!!!";
        sourceMP4.src = "videos/poet-aniket-new.mp4";

    } else if ((moot_name.match(/ma.*/) || moot_name.match(/Ma.*/) || moot_name.match(/mA.*/)) || moot_name.match(/MA.*/)) {
        console.log("Marrior");
        div.innerText = "I know its you Marrior!!!";
        sourceMP4.src = "videos/Go-and-study.mp4";

    } else if ((moot_name.match(/su.*/) || moot_name.match(/Su.*/) || moot_name.match(/sU.*/)) || moot_name.match(/SU.*/)) {
        console.log("Sunny");
        div.innerText = "I know its you wolf cut gal - Sunny!!!";
        sourceMP4.src = "videos/wolf-cut-sunny.mp4";

    }  else if ((moot_name.match(/anshika.*/) || moot_name.match(/Anshika*/) || moot_name.match(/ANSHIKA.*/))) {
        console.log("Anshika");
        div.innerText = "I know its you Anshika!!!";
        sourceMP4.src = "videos/chae-ansh.mp4";
    } else if ((moot_name.match(/sh.*/) || moot_name.match(/Sh.*/) || moot_name.match(/sH.*/) || moot_name.match(/SH.*/))) {
        console.log("Sharen");
        div.innerText = "I know its you Sharen, I know what you are.. HEHEHHE !!!";
        sourceMP4.src = "videos/sharen.mp4";

    }  else if ((moot_name.match(/MN.*/) || moot_name.match(/Mn.*/) || moot_name.match(/mN.*/) || moot_name.match(/mn.*/))) {
        console.log("MN");
        div.innerText = "I know its you programmer + composer + singer gal MN from Philippines!!!";
        sourceMP4.src = "videos/MN.mp4";
    } 
    else if ((moot_name.match(/ni.*/) || moot_name.match(/Ni.*/) || moot_name.match(/nI.*/) || moot_name.match(/nI.*/) || moot_name.match(/APO.*/) || moot_name.match(/Apo.*/)|| moot_name.match(/apo.*/))) {
        console.log("Nia ");
        div.innerText = "I know its you Nia (Apobangpo)!!!";
        sourceMP4.src = "videos/jhope.mp4";
    }  else if ((moot_name.match(/bu.*/) || moot_name.match(/Bu.*/) || moot_name.match(/bU.*/) || moot_name.match(/BU.*/))) {
        console.log("Butter");
        div.innerText = "I know its you, Butter!!! and she's not your wife..";
        sourceMP4.src = "videos/tyuzu.mp4";
    }  else if ((moot_name.match(/ti.*/) || moot_name.match(/Ti.*/) || moot_name.match(/tI.*/) || moot_name.match(/TI.*/))) {
        console.log("Tia");
        div.innerText = "I know its you Tia!!! stay away from chae chae...";
        sourceMP4.src = "videos/chaeyoung.mp4";
    } else if ((moot_name.match(/ane.*/) || moot_name.match(/Ane.*/) || moot_name.match(/aNe.*/) || moot_name.match(/ANE.*/))) {
        console.log("Anew");
        div.innerText = "I know its you Anew...";
        sourceMP4.src = "videos/Anew.mp4";
    } else {
        console.log("Invalid");
        div.innerText = "Invalid";
        video_div.classList.add("d-none");

    }
    video_div.appendChild(breaker);
    video1.appendChild(sourceMP4);
    video_div.appendChild(video1);
    useroutput.appendChild(div);
    useroutput.appendChild(video_div);
    // console.log(video_div);
}