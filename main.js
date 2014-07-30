$( document ).ready(function() {
	var x = 0;

	var pictures_array = [
		"http://31.media.tumblr.com/f6c67ec2821a91051e4175f8a102e1e2/tumblr_n6rzpcsMk41st5lhmo1_1280.jpg", 
		"http://38.media.tumblr.com/7ec15487856dbf285d695e5a4f8e12ef/tumblr_n6rzwbv3ji1st5lhmo1_1280.jpg",
		"http://38.media.tumblr.com/e6c1c887ba8e24a855351940bcd3c343/tumblr_n8zm44LBpl1st5lhmo1_1280.jpg",
		"http://38.media.tumblr.com/63748da1fab7ccebe70355807587d659/tumblr_n6rz5eNBG51st5lhmo1_1280.jpg",
		"http://37.media.tumblr.com/09e6de2da0cb27a3a9008dc046ffe072/tumblr_n6essmaWs11st5lhmo1_1280.jpg",
		"http://33.media.tumblr.com/eceae637f1f8459d627ade02a17f5198/tumblr_n4cm36DV9F1st5lhmo1_1280.jpg",
		"http://38.media.tumblr.com/282fadab7d782edce9debf3872c00ef1/tumblr_n3tswomqPS1st5lhmo1_1280.jpg",
	];



		setInterval(function() {
				

			if (pictures_array[x]) {
				document.body.style.backgroundImage="url(" + pictures_array[x] + ")";
				x++;
			}

			else {
				x = 0;
			}

		}


			, 60000);
		

		// x = 0;
		// debugger;
	
});

