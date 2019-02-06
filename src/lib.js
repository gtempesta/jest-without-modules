/**
 * Funzione che conta il numero di attributi di un oggetto o array
 */
function count(obj){
    var c=0;
    for(var i in obj)c++;
    return c;
}

/**
* Numeric value
*/
jQuery.fn.nval=function(){
  if( $(this).val()=='' || isNaN($(this).val()) )return 0;
  return parseFloat($(this).val());
};