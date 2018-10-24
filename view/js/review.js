
var star = document.querySelectorAll(".img-star");
var rating;
var bookID = getParameterByName("bookid");

function loadUserData() {
	var id = getCookie("id");

	if (!id) {
		window.location.href = "/view/login.php";
	}

	xhttp = new XMLHttpRequest();
	xhttp.open("GET", "../controller/user_id.php", true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				// decode response
				var response = JSON.parse(this.responseText);

				// get html element
				var user = document.getElementById("user");
				
				user.textContent = 'Hi, ' + response["username"];
			} else {
				window.location.href = "/view/login.php";
			}
		}
	}

	loadBookData(bookID);
}
function loadBookData(book_id){
	
	var xhttp = new XMLHttpRequest();

	var uriPath = "/controller/book_id.php?id=" + book_id;
    xhttp.open("GET", uriPath, true);
    xhttp.send();

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				var result = JSON.parse(this.responseText);
				// get html element
				var title = document.getElementById("book-title");
				var author = document.querySelector(".author");
				var bookPic = document.querySelector(".book-pic");
				
				title.textContent = result["title"];
				author.textContent = result["author"];
				// bookPic.textContent = result["pic"];

				bookPic.style.background = 'url(\"' + result["pic"] + '\")';
				bookPic.style.backgroundSize = "cover";
				bookPic.style.backgroundPosition = "center";
			} else {
				// alert("there is no book with id "+ result["id"]);
				window.location.href = "/view/history.php";
				// alert("CAN'T TAKE BOOK DATA");
			}
		}
	}
}

// NOTE : STAR INDEX VARIABEL KEBALIK (PALING KIRI KE KANAN : 4 3 2 1 0)
function setStar(idx){
	var star = document.querySelectorAll(".img-star");
	for (var i=4; i>=idx; i--){
		star[i].setAttribute("src","asset/full_star.png");
	}
	for (var i=0; i<=idx-1;i++){
		star[i].setAttribute("src","asset/empty_star.png");
	}
	
	rating = 5-idx;
}

function makeReview(){
	var bookTitle = document.getElementById("book-title").value;
	var userID = getCookie("id");
	var comment = document.getElementById("user-comment").value;

	checkValid(bookID, userID, function(valid){
		if(valid){
			validateRating(rating, function(valid){
				if(valid){
					var body = {
						book_id : bookID,
						message : comment,
						rating : rating
					};
					var requestBody = JSON.stringify(body);
					var xhttp = new XMLHttpRequest();

					xhttp.open("POST","../controller/review.php", true);
					xhttp.setRequestHeader("Content-type", "application/json");
					xhttp.send(requestBody);

					xhttp.onreadystatechange = function(){
						if(this.readyState === 4){
							if(this.status === 200){
								alert("berhasil");
							} else{
								alert("NOT OK");
							}
						}
					}
				}else{
					alert("NOT OK");
				}
			});
		} else{
			alert("NOT VALID");
		}
	});	
}

function checkValid(bookID, userID, callback){
	var body = {
		book_id : bookID,
		user_id : userID
	};

	var requestBody = JSON.stringify(body);
	var xhttp = new XMLHttpRequest();

	xhttp.open("POST","../controller/check_review.php", true);
	xhttp.setRequestHeader("Content-type","application/json");
	xhttp.send(requestBody);

	xhttp.onreadystatechange = function() {
		if(this.readyState === 4){
			if(this.status === 200){
				return callback(true);
			} else{
				return callback(false);
			}
		}
	}
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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function validateRating(rating, callback){
	if(rating == null){
		callback(false);
	}else{
		callback(true);
	}
}