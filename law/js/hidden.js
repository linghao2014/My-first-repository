window.onload=function()
	{
		var timer;
		var adiv1=document.getElementById('div1');
		var adiv2=document.getElementById('div2');
		function show()
		{
			clearTimeout(timer);        //清楚定时器，不让hover回来 另一个框会消失
			adiv2.style.display="block";
			adiv1.className="div1-c";
			}
		function hide()
		{
			timer=setTimeout(function(){adiv2.style.display="none";adiv1.className="div1"},300);
			}
		adiv1.onmouseover=show;
		adiv2.onmouseover=show;
		adiv1.onmouseout=hide;
		adiv2.onmouseout=hide;
		};