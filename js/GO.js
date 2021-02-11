authcode = '';
code_response = {};

function LOGINopenSpotify() {
    authcode = fetch('https://accounts.spotify.com/authorize?client_id=1844ffe231fa46dbac898061d9787728&response_type=code'+ 
    '&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-modify-playback-state&state=34fFs29kd09', 
    {
        method: 'GET',
        mode: "no-cors"        
    }).then((response) => {
            return response.json();
    }).then((body) => {
        return body.code;
    });
}

function openSpotify() {
    fetch('https://accounts.spotify.com/api/token', 
    {
        method: 'POST',
        body: {
            client_id: '1844ffe231fa46dbac898061d9787728',
            client_secret: '605617bfa80a4a5e92a502dfaddede27',
            code: authcode,
            redirect_uri: 'https%3A%2F%2Fexample.com%2Fcallback',
            grant_type: "authorization_code"
        }
    }).then((response) => {
            return response.json();
    }).then((body) => {
        code_response = body
        buildSpotify()
    });
}

function buildSpotify() {
    document.getElementById("loginSpotifyButton").style = "display: none;"
    document.getElementById("spotifyButton").style = "display: none;"

    let play = document.createElement("button");
    play.className = "playbutton pause"
}