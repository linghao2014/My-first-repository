//new SlideTrans("idContainer", "idSlider", 3).Run();
///////////////////////////////////////////////////////////
var forEach = function(array, callback, thisObject){
 if(array.forEach){
  array.forEach(callback, thisObject);
 }else{
  for (var i = 0, len = array.length; i < len; i++) { callback.call(thisObject, array[i], i, array); }
 }
}
var st = new SlideTrans("idContainer2", "idSlider2", 5, { Vertical: false });
var nums = [];
//插入数字
for(var i = 0, n = st._count - 1; i <= n;){
 (nums[i] = $("www_csrcode_cn").appendChild(document.createElement("li"))).innerHTML = ++i;
}
forEach(nums, function(o, i){
 o.onmouseover = function(){ o.className = "on"; st.Auto = false; st.Run(i); }
 o.onmouseout = function(){ o.className = ""; st.Auto = true; st.Run(); }
})
//设置按钮样式
st.onStart = function(){
 forEach(nums, function(o, i){ o.className = st.Index == i ? "on" : ""; })
}
//$("idAuto").onclick = function(){
 //if(st.Auto){
  //st.Auto = false; st.Stop(); this.value = "自动";
 //}else{
  //st.Auto = true; st.Run(); this.value = "停止";
 //}
//}
//$("idNext").onclick = function(){ st.Next(); }
//$("idPre").onclick = function(){ st.Previous(); }
//$("idTween").onchange = function(){
 //switch (parseInt(this.value)){
  //case 2 :
   //st.Tween = Tween.Bounce.easeOut; break;
  //case 1 :
   //st.Tween = Tween.Back.easeOut; break;
  //default :
   //st.Tween = Tween.Quart.easeOut;
 //}
//}
st.Run();