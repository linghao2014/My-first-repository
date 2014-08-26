function validate_required(field,alerttxt)
{
with (field)
  {
  if (value==null||value=="")
    {alert(alerttxt);return false}
  else {return true}
  }
}

 function num_required(field,alerttxt)
{
var reg=/^[0-9]{10}$/
with (field)
  {
  if (!reg.test(value))
    {alert(alerttxt);return false}
  else {return true}
  }
}
 
  function qq_required(field,alerttxt)
{
var rege=/^[0-9]+$/
with (field)
  {
  if (!rege.test(value))
    {alert(alerttxt);return false}
  else {return true}
  }
}

function phone_required(field,alerttxt)
{
var reg=/^[0-9]{11}$/
with (field)
  {
  if (!reg.test(value))
    {alert(alerttxt);return false}
  else {return true}
  }
}
 
function validate_form(thisform)
{
  with (thisform)
  {
  if (validate_required(name,"姓名不能为空!")==false)
    {name.focus();return false}
  }
  with (thisform)
  {
  if (num_required(num,"请输入正确的学号!")==false)
    {num.focus();return false}
  }
  with (thisform)
  {
  if (qq_required(qq,"QQ号码不能为空或不是数字!")==false)
    {qq.focus();return false}
  }
  with (thisform)
  {
  if (phone_required(phone,"电话号码长度不合法或不是数字!")==false)
    {phone.focus();return false}
  }
  
}