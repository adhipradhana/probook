function loadUserData() {
	var id = getCookie("id");

	if (!id) {
		window.location.href = "/view/login.php";
	}

	xhttp = new XMLHttpRequest();
	xhttp.open("GET", "/controller/user_id.php", true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				// decode response
				var response = JSON.parse(this.responseText);

				document.getElementById("user").textContent = 'Hi, ' + response["username"];
			} else {
				window.location.href = "/view/login.php";
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

function searchBooks() {
	var searchQuery = getParameterByName("search");
	var uriPath = '/controller/search.php?search=' + searchQuery;

	xhttp = new XMLHttpRequest();
    xhttp.open("GET", uriPath, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
    	if (this.readyState === 4) {
    		if (this.status === 200) {
    			booksList = JSON.parse(this.responseText);
    			document.getElementById("result-number").textContent = booksList.length;

    			booksList.forEach(function(book) {
    				createBookContainer(book);
    			});
    		} 
    	}
    }
}

function createBookContainer(book) {
	var bookContainer = document.createElement("div");
	var bookImage = document.createElement("div");
	var bookDetail = document.createElement("div");
	var bookTitle = document.createElement("h1");
	var bookSubtitle = document.createElement("p");
	var bookSynopsis = document.createElement("p");
	var detailButton = document.createElement("button");

	bookContainer.classList.add("book-container");
	bookImage.classList.add("book-image");
	bookDetail.classList.add("book-detail");
	bookTitle.classList.add("book-title");
	bookSubtitle.classList.add("book-subtitle");
	bookSynopsis.classList.add("book-synopsis");
	detailButton.classList.add("detail-button");

	bookImage.style.background = 'url(\"' + book["pic"] + '\")';
	bookImage.style.backgroundSize = "cover";
	bookImage.style.backgroundPosition = "center";
	bookTitle.textContent = book["title"];
	bookSubtitle.textContent = book["author"] + ' - ' + parseFloat(book["avg_rating"]).toFixed(1) + '/5.0';
	bookSynopsis.textContent = book["synopsis"];
	detailButton.textContent = "Detail";
	detailButton.setAttribute("data-bookid", book["id"]);
	detailButton.addEventListener("click", function() {
		window.location.href = "/view/detail.php?id=" + this.getAttribute("data-bookid");
	});

	bookContainer.appendChild(bookImage);
	bookContainer.appendChild(bookDetail);
	bookDetail.appendChild(bookTitle);
	bookDetail.appendChild(bookSubtitle);
	bookDetail.appendChild(bookSynopsis);
	bookDetail.appendChild(detailButton);

	document.getElementById("book-placeholder").appendChild(bookContainer);
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