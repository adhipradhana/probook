function loadDetailData() {
    var user_id = getCookie("id");

    if (!user_id) {
        window.location.href = "/view/login.php";
    }

    var book_id = getUrlParam('id', null);
    if (!book_id) {
        //Param nya ga bener
    }

    loadBookData(user_id, book_id);
    loadReviewData(book_id);
}

function loadBookData(user_id, book_id) {
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

function loadReviewData(book_id) {
    xhttp = new XMLHttpRequest();
    uriPath = "/controller/book_reviews.php?id=" + book_id;
    xhttp.open("GET", uriPath, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var response = JSON.parse(this.responseText);
                response.forEach(displayReview);
            }
        }
    }
}

function processOrder() {
    var user_id = getCookie("id");

    if (!user_id) {
        window.location.href = "/view/login.php";
    }

    var book_id = getUrlParam('id', null);
    if (!book_id) {
        //Param nya ga bener
    }

    var quantity = document.getElementById('order-quantity').value;
    var body = {
        'book_id' : book_id,
        'quantity' : quantity
    };

    var requestBody = JSON.stringify(body);
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "/controller/create_order.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(requestBody);

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                triggerNotification(JSON.parse(this.responseText)["id"]);
            } else {
                alert("NOT OK");
            }
        }
    }
}

function triggerNotification(id) {
    document.getElementById('notif-no').textContent = 'Nomor Transaksi : ' + id;
    document.getElementById('notification-background').style.display = "block";
}

function closeNotification() {
    document.getElementById('notification-background').style.display = "none";
}

function changeRating(avgRating) {
    var bookRating = document.getElementById("book-ratings-num");

    bookRating.textContent = avgRating.toFixed(1) + '/5.0';

    for (var i = 1; i <= 5; i++) {
        var star = document.getElementById("star-" + i);
        if (avgRating >= i) {
            star.src = 'asset/full_star.png';
        }
        else if ((avgRating + 0.5) >= i) {
            star.src = 'asset/half_star.png';
        }  
        else {
            star.src = 'asset/empty_star.png';
        }
    }
}

function displayReview(reviewItem) {
    var reviewUnit = document.createElement("div");
    var reviewPic = document.createElement("img");
    var reviewDetail = document.createElement("div");
    var reviewName = document.createElement("h3");
    var reviewDesc = document.createElement("p");
    var reviewRating = document.createElement("div");
    var reviewStar = document.createElement("img");
    var ratings = document.createElement("p");

    reviewUnit.className = 'review-unit';
    reviewPic.className = 'review-pic';
    reviewDetail.className = 'review-detail';
    reviewName.className = 'review-name';
    reviewDesc.className = 'review-desc';
    reviewRating.className = 'review-rating';
    reviewStar.className = 'review-star';
    ratings.className = 'ratings';

    reviewPic.src = reviewItem["profile_pic"];
    reviewPic.style.height = '150px';
    reviewPic.style.width = '150px';
    reviewName.textContent = '@' + reviewItem["username"];
    reviewDesc.textContent = reviewItem["message"];
    reviewStar.src = 'asset/full_star.png';
    ratings.textContent = parseFloat(reviewItem["rating"]).toFixed(1) + '/5.0';

    reviewDetail.appendChild(reviewName);
    reviewDetail.appendChild(reviewDesc);
    reviewRating.appendChild(reviewStar);
    reviewRating.appendChild(ratings);
    reviewUnit.appendChild(reviewPic);
    reviewUnit.appendChild(reviewDetail);
    reviewUnit.appendChild(reviewRating);

    document.getElementById('book-reviews-list').appendChild(reviewUnit);


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