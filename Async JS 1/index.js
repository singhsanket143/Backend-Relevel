document.getElementById("submit").onclick = () => {
    const target = document.getElementById("datetime").value;
    let intervalId = setInterval(function () {
        let current = new Date();
        let diff = new Date(target).getTime() - current.getTime();
        document.getElementById("days").innerText = 
            Math.floor(diff/(1000*60*60*24));
        document.getElementById("hours").innerText = 
            Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        document.getElementById("minutes").innerText = 
            Math.floor((diff%(1000*60*60))/(1000*60));
        document.getElementById("seconds").innerText = 
            Math.floor((diff%(1000*60))/(1000));

        if(diff < 0) {
            clearInterval(intervalId);
            document.getElementById("days").innerText = "NA"
            document.getElementById("hours").innerText = "NA"
            document.getElementById("minutes").innerText = "NA"
            document.getElementById("seconds").innerText = "NA"
        }
    }, 1000);
}