module.exports = function main() {
	var array1=[];
	var array2=[];
	var array3=[];
	for(var i=0; i<arguments[0].length; i++){
		array1[i]=lcd1(Number(arguments[0][i]));
		array2[i]=lcd2(Number(arguments[0][i]));
		array3[i]=lcd3(Number(arguments[0][i]));
	}
	var l1=array1.join(' ');
	var l2=array2.join(' ');
	var l3=array3.join(' ');
    console.log(l1+'\n'+l2+'\n'+l3);
    return 'Hello World!';
};
function lcd1(a) {
	if(a==1||a==4)
		return '...';
	else
		return '._.';
}
function lcd2(a) {
	if(a==0)
		return '|.|';
	else if(a==1||a==7)
		return '..|';
	else if(a==2||a==3)
		return '._|';
	else if(a==5||a==6)
		return '|_.';
	else
		return '|_|';
}
function lcd3(a) {
	if(a==2)
		return '|_.';
	else if(a==3||a==5)
		return '._|';
	else if(a==0||a==6||a==8)
		return '|_|';
	else
		return '..|';
}