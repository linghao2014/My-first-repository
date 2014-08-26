window.onload=function()
{
	var oli=document.getElementsByTagName('li');
	//alert(oli.length);
	var i;
	for(i=0;i<=oli.length;i++)
	{
		oli[i].index=i;
		if(i%2==0)
		oli[i].className="backg";
		}
	};