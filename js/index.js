var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
//  paginationType : 'custom',
    autoplayDisableOnInteraction : false,
    autoplay: 3000
 });
var fenlei = document.getElementById("fenlei").getElementsByTagName("li");
var nav = document.getElementById("nav").getElementsByTagName("a");
for(var i=0;i<fenlei.length;i++)
{
	fenlei[i].onclick = function(){
		for(var i=0;i<fenlei.length;i++)
		{
			fenlei[i].className = "";
		}
		this.className = "current";
		return false;
	}
}
for(var i=0;i<nav.length;i++)
{
	nav[i].onclick = function(){
		for(var i=0;i<nav.length;i++)
		{
			nav[i].className = nav[i].className.replace(" current","");
		}
		this.className += " current";
		return false;
	}
}
