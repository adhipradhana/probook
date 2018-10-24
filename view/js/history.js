function loadDetailData() {
    var user_id = getCookie("id");

    if (!user_id) {
        window.location.href = "/view/login.php";
    }

    loadUserHeader();
    loadHistoryData(user_id);
}

function loadUserHeader() {
    xhttp = new XMLHttpRequest();
    uriPath = "/controller/user_id.php";
    xhttp.open("GET", uriPath, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var response = JSON.parse(this.responseText);
                document.getElementById("user").textContent = 'Hi, ' + response['username'];
            }
        }
    }
}

function loadHistoryData(user_id) {
    xhttp = new XMLHttpRequest();
    uriPath = "../controller/prepare_history.php?id=" + user_id;
    xhttp.open("GET", uriPath, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var response = JSON.parse(this.responseText);
                response.forEach(prepareHistoryUnit);
            }
        }
    }
}

function prepareHistoryUnit(itemHistory) {
    var historyUnit = document.createElement('div');
    var bookPic = document.createElement('img');
    var bookDetails = document.createElement('div');
    var bookName = document.createElement('h2');
    var orderQuantity = document.createElement('h4');
    var reviewExist = document.createElement('h4');
    var orderDetails = document.createElement('div');
    var orderDate = document.createElement('h3');
    var orderNum = document.createElement('h3');
    var reviewBook = document.createElement('button');

    bookPic.src = itemHistory["pic"];
    bookName.textContent = itemHistory["title"];
    orderQuantity.textContent = 'Jumlah : ' + itemHistory["quantity"];
    orderDate.textContent = parseDate(itemHistory["timestamp"]);
    orderNum.textContent = 'Nomor Order : #' + itemHistory["order_id"];
    
    if (itemHistory["is_reviewed"] == '1') {
        reviewBook.style.display = 'none';
        reviewExist.textContent = 'Anda sudah memberikan review.';
    }
    else {
        reviewBook.className = 'review-book';
        reviewBook.id = itemHistory["book_id"];
        reviewBook.addEventListener('click', function(event) {
            linkToReview(reviewBook.id);
            event.preventDefault();
        });
        reviewBook.textContent = 'Review';
        reviewExist.textContent = 'Belum direview';
    }

    historyUnit.className = 'history-unit';
    bookPic.className = 'book-pic';
    bookDetails.className = 'book-details';
    bookName.className = 'book-name';
    orderQuantity.className = 'order-quantity';
    reviewExist.className = 'review-exist';
    orderDetails.className = 'order-details';
    orderDate.className = 'order-date';
    orderNum.className = 'order-num';

    bookDetails.appendChild(bookName);
    bookDetails.appendChild(orderQuantity);
    bookDetails.appendChild(reviewExist);
    orderDetails.appendChild(orderDate);
    orderDetails.appendChild(orderNum);
    orderDetails.appendChild(reviewBook);
    historyUnit.appendChild(bookPic);
    historyUnit.appendChild(bookDetails);
    historyUnit.appendChild(orderDetails);

    document.getElementById('history-list').appendChild(historyUnit);
}

function parseDate(timestamp) {
    var date = timestamp.split(" ")[0];
    var month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    date = date.split("-");
    return date[2] + ' ' + month[parseInt(date[1]) - 1] + ' ' + date[0];
}

function linkToReview(id) {
    window.location.href = '/view/review.php?bookid=' + id;
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