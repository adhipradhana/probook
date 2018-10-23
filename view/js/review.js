var star = document.querySelectorAll(".img-star");

function initialLoad(){

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

	console.log("di set "+ (idx+1) + " bintang");
}