# Image Slider Based On jQuery

![Slider](https://github.com/febeeh/Image_Slider_jQuery/blob/main/EXAMPLE/images/slider.png)

This is just a sample design developed using this jQuery code. Use this code to create your own ideas!!! 

**Documentation:**

**USAGE :**
```
var total_pic = "[No_Of_Images]"; // Replace Text including [] with number of images need for each slides.
var slider = "[Class_Name]"; // Replace Text including [] with the class name given for respective slide images.
var left_slide = "[Class_Name]"; // Replace Text including [] with the class name of left slide button. 
var right_slide = "[Class_Name]"; // Replace Text including [] with the class name of right slide button. </pre></code>
```
**HTML**

Adding Images:

            <div class="slideme">
                <img src="images/1.jpg">
            </div>
            <div class="slideme">
                <img src="images/2.jpg">
            </div>
            <div class="slideme">
                <img src="images/3.jpg">
            </div>
            <div class="slideme">
                <img src="images/4.jpg">
            </div>
            <div class="slideme">
                <img src="images/5.jpg">
            </div>
            <div class="slideme">
                <img src="images/3.jpg">
            </div>
            <div class="slideme">
                <img src="images/4.jpg">
            </div>
            <div class="slideme">
                <img src="images/5.jpg">
            </div>
            <div class="slideme">
                <img src="images/3.jpg">
            </div>
            <div class="slideme">
                <img src="images/4.jpg">
            </div>
            <div class="slideme">
                <img src="images/5.jpg">
            </div>
            <div class="slideme">
                <img src="images/2.jpg">
            </div>


Adding Button:


        <a class="left-slide">❮</a>
        <a class="right-slide">❯</a>


**jQuery**
```
var total_pic = 3; 
var slider = ".slideme";
var left_slide = ".left-slide"; 
var right_slide = ".right-slide";
var picprev = 0;
var total_len = $(slider).length;
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
```

**Download the EXAMPLE folder from respiratory and test it yourself :)**
