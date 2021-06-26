var slider = ".slideme"; // Enter here class name of slider ( Add this class name on each respective picture classes)
var left_slide = ".left-slide"; // Enter here class name of your left slide 
var right_slide = ".right-slide"; // Enter here class name of your right slide
var picprev = 0;
var total_len = $(slider).length;
if (screen.width <= '1243' && screen.width > '939') {
	var total_pic = 3; // no of pic to show each slide
	var piccount = total_pic;
	$(slider).hide();
	for (var i = 0; i < total_pic; i++) {
		$(slider).eq(i).fadeIn(250);
	}
	$(right_slide).click(function () {
		if (total_len <= piccount) {
			try {
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).hide();
				}
				picprev = 0;
				piccount = total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (err) { }

		} else {
			try {
				picprev = piccount;
				piccount += total_pic;
				for (var i = 0; i < total_pic; i++) {
					$(slider).eq(picprev - 1 - i).hide();
				}
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		}
	});
	$(left_slide).click(function () {
		if (piccount <= total_pic) {
			try {
				for (var i = 0; i < total_pic; i++) {
					if ((piccount - i) > total_len) {
						continue;
					}
					$(slider).eq(piccount - 1 - i).hide();
				}
				piccount = total_len;
				var check_div = 2;
				if (total_pic == 1) {
					piccount = total_len;
				} else {
					while ((piccount % total_pic) != 0) {
						piccount += 1;
					}
				}
				picprev = piccount - total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		} else {
			try {
				for (var i = 0; i < total_pic; i++) {
					if ((piccount - i) > total_len) {
						continue;
					}
					$(slider).eq(piccount - 1 - i).hide();
				}
				piccount -= total_pic;
				picprev = picprev - total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		}
	});
}else if (screen.width <= '939' && screen.width > '629') {
	var total_pic = 2; // no of pic to show each slide
	var piccount = total_pic;
	$(slider).hide();
	for (var i = 0; i < total_pic; i++) {
		$(slider).eq(i).fadeIn(250);
	}
	$(right_slide).click(function () {
		if (total_len <= piccount) {
			try {
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).hide();
				}
				picprev = 0;
				piccount = total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (err) { }

		} else {
			try {
				picprev = piccount;
				piccount += total_pic;
				for (var i = 0; i < total_pic; i++) {
					$(slider).eq(picprev - 1 - i).hide();
				}
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		}
	});
	$(left_slide).click(function () {
		if (piccount <= total_pic) {
			try {
				for (var i = 0; i < total_pic; i++) {
					if ((piccount - i) > total_len) {
						continue;
					}
					$(slider).eq(piccount - 1 - i).hide();
				}
				piccount = total_len;
				var check_div = 2;
				if (total_pic == 1) {
					piccount = total_len;
				} else {
					while ((piccount % total_pic) != 0) {
						piccount += 1;
					}
				}
				picprev = piccount - total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		} else {
			try {
				for (var i = 0; i < total_pic; i++) {
					if ((piccount - i) > total_len) {
						continue;
					}
					$(slider).eq(piccount - 1 - i).hide();
				}
				piccount -= total_pic;
				picprev = picprev - total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		}
	});
}else if (screen.width <= '629') {
	var total_pic = 1; // no of pic to show each slide
	var piccount = total_pic;
	$(slider).hide();
	for (var i = 0; i < total_pic; i++) {
		$(slider).eq(i).fadeIn(250);
	}
	$(right_slide).click(function () {
		if (total_len <= piccount) {
			try {
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).hide();
				}
				picprev = 0;
				piccount = total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (err) { }

		} else {
			try {
				picprev = piccount;
				piccount += total_pic;
				for (var i = 0; i < total_pic; i++) {
					$(slider).eq(picprev - 1 - i).hide();
				}
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		}
	});
	$(left_slide).click(function () {
		if (piccount <= total_pic) {
			try {
				for (var i = 0; i < total_pic; i++) {
					if ((piccount - i) > total_len) {
						continue;
					}
					$(slider).eq(piccount - 1 - i).hide();
				}
				piccount = total_len;
				var check_div = 2;
				if (total_pic == 1) {
					piccount = total_len;
				} else {
					while ((piccount % total_pic) != 0) {
						piccount += 1;
					}
				}
				picprev = piccount - total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		} else {
			try {
				for (var i = 0; i < total_pic; i++) {
					if ((piccount - i) > total_len) {
						continue;
					}
					$(slider).eq(piccount - 1 - i).hide();
				}
				piccount -= total_pic;
				picprev = picprev - total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		}
	});
}else{
	var total_pic = 4; // no of pic to show each slide
	var piccount = total_pic;
	$(slider).hide();
	for (var i = 0; i < total_pic; i++) {
		$(slider).eq(i).fadeIn(250);
	}
	$(right_slide).click(function () {
		if (total_len <= piccount) {
			try {
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).hide();
				}
				picprev = 0;
				piccount = total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (err) { }

		} else {
			try {
				picprev = piccount;
				piccount += total_pic;
				for (var i = 0; i < total_pic; i++) {
					$(slider).eq(picprev - 1 - i).hide();
				}
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		}
	});
	$(left_slide).click(function () {
		if (piccount <= total_pic) {
			try {
				for (var i = 0; i < total_pic; i++) {
					if ((piccount - i) > total_len) {
						continue;
					}
					$(slider).eq(piccount - 1 - i).hide();
				}
				piccount = total_len;
				var check_div = 2;
				if (total_pic == 1) {
					piccount = total_len;
				} else {
					while ((piccount % total_pic) != 0) {
						piccount += 1;
					}
				}
				picprev = piccount - total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		} else {
			try {
				for (var i = 0; i < total_pic; i++) {
					if ((piccount - i) > total_len) {
						continue;
					}
					$(slider).eq(piccount - 1 - i).hide();
				}
				piccount -= total_pic;
				picprev = picprev - total_pic;
				for (var i = picprev; i < piccount; i++) {
					$(slider).eq(i).fadeIn(250);
				}
			} catch (error) { };
		}
	});
}