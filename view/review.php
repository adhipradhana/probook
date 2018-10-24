<!DOCTYPE html>
<html>
<head>
	<title>Review</title>
	<link rel="stylesheet" type="text/css" href="/view/css/review.css">
	<link href="https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet">
</head>
<body onload="loadUserData()">
	<div class="header">
		<span id="pro">Pro-</span><span id="book">Book</span> 
		<span class="header2"> 
			<span id="user">Hi, username</span> <span id="logicon"> icon log</span> 
		</span>
	</div>
	<div class="main-section">
		<a href="/view/search.php"><div class="browse"><strong class="font2em">B</strong>rowse</div></a>
		<a href="#"><div class="history"><strong class="font2em">H</strong>istory</div></a> 
		<a href="/view/profile.php"><div class="profile"><strong class="font2em">P</strong>rofile</div></a>
	</div>
	<div class="book-section">
		<div class="title-book">
			<div class="title"><span id="book-title">Bis Fantasis &amp; Cara Menemukannya</span></div>
			<div class="author">Light R. D. B.</div>
		</div>
		<div class="book-pic"></div>
	</div>
	<div class="review-section">
		<span id="add-rating">Add Rating</span>
		<div class="review">
			<img src="asset/empty_star.png" class="img-star star1" onclick="setStar(0)"> 
			<img src="asset/empty_star.png" class="img-star star2" onclick="setStar(1)"> 
			<img src="asset/empty_star.png" class="img-star star3" onclick="setStar(2)"> 
			<img src="asset/empty_star.png" class="img-star star4" onclick="setStar(3)"> 
			<img src="asset/empty_star.png" class="img-star star5" onclick="setStar(4)">
		</div>
	</div>
	<div class="comment-section">
		<span id="add-comment">Add Comment</span>
		<div class="comment">
			<textarea rows="5" id="user-comment"></textarea>
		</div>
	</div>
	<a href="/view/history.php"><button type="submit" id="back">Back</button></a>
	<button type="submit" id="submit" onclick="makeReview()">Submit</button>

	<script type="text/javascript" src="/view/js/review.js"></script>
</body>
</html>