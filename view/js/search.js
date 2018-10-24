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

function searchBook() {
	var query = document.getElementById("search-box").value.replace(" ", "%20");
	console.log(query);

	window.location.href = "/view/search_result.php?search=" + query;
}