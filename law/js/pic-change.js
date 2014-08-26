var gtopTab="one";
function $id(id){
 return document.getElementById(id);
}
function changesTab(tab_id){
 if (tab_id==gtopTab){
  return;
 }else{
  $id(gtopTab).className="unselect";
  $id(tab_id).className="select";
  $id("tab_"+gtopTab).style.display="none";
  $id("tab_"+tab_id).style.display="block";
  gtopTab=tab_id;
 }
}