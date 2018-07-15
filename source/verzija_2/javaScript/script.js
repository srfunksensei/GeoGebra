// Script file

function setApplet(){
	     var applet = document.ggbApplet;
		 applet.openFile(document.OdabirForma.FuncOdabir.value);
}
	
function iscrtaj(){
	var applet = document.ggbApplet;
	var k = document.forma.k.value - 0,
		n = document.forma.n.value - 0;
	var func = "y = k*x + n";
	
	applet.reset();
	applet.evalCommand(func);
	applet.setValue('k', k);
	applet.setValue('n', n);
	applet.setLabelStyle(applet.getObjectName(2), 2);
	applet.setLabelVisible(applet.getObjectName(2), true);
		
	document.forma.k.value = "";
	document.forma.n.value = "";
}

function drawFunction(){
	var applet = document.ggbApplet;
	var func = document.forma.func.value;
	
	applet.reset();
	applet.evalCommand(func);
	applet.setLabelStyle(applet.getObjectName(0), 2);
	applet.setLabelVisible(applet.getObjectName(0), true);
	
	document.forma.func.value = "";
}

// draw a function which is given in param form
function drawFunctionParam(){
	var applet = document.ggbApplet;
		applet.evalCommand("x_1(x)=" + document.forma_param.x_t.value);
		applet.evalCommand("y_1(x)=" + document.forma_param.y_t.value);
}

// draw a function with three parameters
// function type: a*x^2 + b*x + c
function drawFunctionParam3(){
	var applet = document.ggbApplet;
	var a = document.forma.a.value - 0,
		b = document.forma.b.value - 0,
		c = document.forma.c.value - 0;
	
	applet.reset();
	if(a == 0) a = 1;
	
	var func = "a*x^2 + b*x + c";
	
	applet.setValue('a', a);
	applet.setValue('b', b);
	applet.setValue('c', c);
	
	var obj_num = applet.getObjectNumber();
	applet.evalCommand(func);
	applet.setLabelStyle(applet.getObjectName(obj_num), 2);
	applet.setLabelVisible(applet.getObjectName(obj_num), true);
	
	document.forma.a.value = "";
	document.forma.b.value = "";
	document.forma.c.value = "";
}

// draw function depending on param
// function type a*F(b*x + c) + d
function drawParamFunction(func_num){
	var applet = document.ggbApplet;
	var a = document.forma.a.value - 0,
		b = document.forma.b.value - 0,
		c = document.forma.c.value - 0,
		d = document.forma.d.value - 0;
	
	applet.reset();
	if(a == 0) a = 1;
	if(b == 0) b = 1;
	
	var func = "y = a*";
	
	if(func_num == 1){
		func += "sin(b*x+c) + d";
	} else if(func_num == 2){
		func += "cos(b*x + c) + d";
	} else if(func_num == 3){
		func += "tan(b*x + c) + d";
	} else if(func_num ==4){
		func += "cot(b*x + c) + d";
	} else if(func_num == 5){
		func += "sec(b*x + c) + d";
	} else if(func_num == 6){
		func += "csc(b*x + c) + d";
	} else if(func_num == 7){
		func += "arcsin(b*x + c) + d";
	} else if(func_num == 8){
		func += "arccos(b*x + c) + d";
	} else if(func_num == 9){
		func += "arctan(b*x + c) + d";
	} else if(func_num == 10){
		func += "arccot(b*x + c) + d";
	}else if(func_num == 11){
		func += "sinh(b*x + c) + d";
	}else if(func_num == 12){
		func += "cosh(b*x + c) + d";
	}else if(func_num == 13){
		func += "tanh(b*x + c) + d";
	}else if(func_num == 14){
		func += "coth(b*x + c) + d";
	}else if(func_num == 15){
		func += "asinh(b*x + c) + d";
	}else if(func_num == 16){
		func += "acosh(b*x + c) + d";
	}else if(func_num == 17){
		func += "atanh(b*x + c) + d";
	}
	
	
	applet.setValue('a', a);
	applet.setValue('b', b);
	applet.setValue('c', c);
	applet.setValue('d', d);
	var obj_num = applet.getObjectNumber();
	applet.evalCommand(func);
	
	applet.setLabelStyle(applet.getObjectName(obj_num), 2);
	applet.setLabelVisible(applet.getObjectName(obj_num), true);
	
	document.forma.a.value = "";
	document.forma.b.value = "";
	document.forma.c.value = "";
	document.forma.d.value = "";
}

function onInit(func_num){
	var func = "y=";
	var applet = document.ggbApplet;
	
	if(func_num == 1){ //linear
		func += "k*x + n"
	} else if(func_num == 2){ //poly
		func += "x^5 + x^3 + x";
	} else if(func_num == 3){ //exp
		func += "e^x";
	} else if(func_num == 4){ // log, ln
		func += "ln(x)";
	} else if(func_num == 5){
		func += "a*sin(b*x + c) + d";
	} else if(func_num == 6){
		func += "a*cos(b*x + c) + d";
	} else if(func_num == 7){
		func += "a*tan(b*x + c) + d";
	} else if(func_num == 8){
		func += "a*cot(b*x + c) + d";
	} else if(func_num == 9){
		func += "a*sec(b*x + c) + d";
	} else if(func_num == 10){
		func += "a*cosec(b*x + c) + d";
	} else if(func_num == 11){
		func += "a*arcsin(b*x + c) + d";
	} else if(func_num == 12){
		func += "a*arccos(b*x + c) + d";
	} else if(func_num == 13){
		func += "a*arctan(b*x + c) + d";
	} else if(func_num == 14){
		func += "a*arccot(b*x + c) + d";
	}else if(func_num == 15){
		func += "a*sinh(b*x + c) + d";
	}else if(func_num == 16){
		func += "a*cosh(b*x + c) + d";
	}else if(func_num == 17){
		func += "a*tanh(b*x + c) + d";
	}else if(func_num == 18){
		func += "a*coth(b*x + c) + d";
	}else if(func_num == 19){
		func += "a*asinh(b*x + c) + d";
	}else if(func_num == 20){
		func += "a*acosh(b*x + c) + d";
	}else if(func_num == 21){
		func += "a*atanh(b*x + c) + d";
	} else if(func_num == 22){
		func += "a*x^2 + b*x + c";
	}
	
	var obj_num = applet.getObjectNumber();
	if (obj_num == 1) obj_num = 0;
	applet.evalCommand(func);
	applet.setLabelStyle(applet.getObjectName(obj_num), 2);
	applet.setLabelVisible(applet.getObjectName(obj_num), true);
}