function loadDetailData() {
    var user_id = getCookie("id");

    if (!user_id) {
        window.location.href = "/view/login.php";
    }

    var book_id = getUrlParam('id', null);
    if (!book_id) {
        //Param nya ga bener
    }

    xhttp = new XMLHttpRequest();
    uriPath = "/controller/book_id.php?id=" + book_id;
    xhttp.open("GET", uriPath, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                //parse to json
                var response = JSON.parse(this.responseText);
                // //get element
                var title = document.getElementById("book-title");
                var author = document.getElementById("book-author");
                var synopsis = document.getElementById("book-desc");
                var image = document.getElementById("book-image");

                title.textContent = response["title"];
                author.textContent = response["author"];
                synopsis.textContent = response["synopsis"];
                image.src = response["pic"];

                changeRating(parseFloat(response["avg_rating"]));
            }
        }
    }
}

function changeRating(avg_rating) {
    var book_rating = document.getElementById("book-ratings-num");

    book_rating.textContent = avg_rating.toFixed(1) + '/5.0';

    for (var i = 1; i <= 5; i++) {
        var star = document.getElementById("star-" + i);
        if (avg_rating >= i) {
            star.src = 'asset/full_star.png';
        }
        else if ((avg_rating + 0.5) >= i) {
            star.src = 'asset/half_star.png';
        }  
        else {
            star.src = 'asset/empty_star.png';
        }
    }
}

function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}