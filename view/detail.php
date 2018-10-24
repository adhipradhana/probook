<!DOCTYPE html>
<html>
<head>
    <title>Book Detail</title>
    <link rel="stylesheet" type="text/css" href="/view/css/detail.css">
    <link href="https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet">
</head>
<body onload="loadDetailData()">
    <div class="header">
        <span id="pro">Pro-</span><span id="book">Book</span> 
        <span class="header2"> 
            <span id="user">Hi, -</span> <span id="logicon"> icon log</span> 
        </span>
    </div>
    <div class="main-section">
        <a href="/view/search.php"><div class="browse"><strong class="font2em">B</strong>rowse</div></a>
        <a href="/view/history.php"><div class="history"><strong class="font2em">H</strong>istory</div></a> 
        <a href="/view/profile.php"><div class="profile"><strong class="font2em">P</strong>rofile</div></a>
    </div>
    <div class="main-page">
        <div class="book-detail">
            <div class="book-text-desc">
                <h1 id="book-title">-</h1>
                <p id="book-author">-</p>
                <p id="book-desc">-</p>
            </div>
            <div class="book-nontext-desc">
                <img id="book-image" src="">
                <div class="book-ratings">
                    <img id="star-1" src="asset/empty_star.png">
                    <img id="star-2" src="asset/empty_star.png">
                    <img id="star-3" src="asset/empty_star.png">
                    <img id="star-4" src="asset/empty_star.png">
                    <img id="star-5" src="asset/empty_star.png">
                </div> 
                <div class="book-ratings-num">
                    <p class='ratings' id="book-ratings-num">-/5.0</p>
                </div>
            </div>
        </div>
        <div class="book-order">
            <h2>Order</h2>
            <div class="order-detail">
                <p id='jumlah'>Jumlah: </p>
                <select id='order-quantity'>
                    <option value=1>1</option>
                    <option value=2>2</option>
                    <option value=3>3</option>
                    <option value=4>4</option>
                    <option value=5>5</option>
                    <option value=6>6</option>
                    <option value=7>7</option>
                    <option value=8>8</option>
                    <option value=9>9</option>
                    <option value=10>10</option>
                </select> 
            </div>
            <button type='button' id='order-submit' onclick="processOrder()">Order</button> 
        </div>
        <div id='book-reviews-list' class="book-reviews">
            <h2>Reviews</h2>
        </div>
    </div>
    <div id="notification-background">
        <div class='notification'>
            <img class='exit-image' src='/view/asset/exit.png' onclick="closeNotification()">
            <div class='notif-detail'>
                <img class='check-image' src='/view/asset/check.png'>
                <div class='notif-text'>
                    <h4>Pemesanan Berhasil!</>
                    <p id='notif-no'>Nomor Transaksi : 3</p>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/detail.js"></script>
</body>
</html>
