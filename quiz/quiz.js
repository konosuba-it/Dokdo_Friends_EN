 function checkanswers()
 {var val ="Dokdo";
 if(val == (document.getElementById("print1").value))
 
  {var val ="Zalophus Japonicus";
  if(val == (document.getElementById("print2").value))
 
   {var val ="1905";
   if(val == (document.getElementById("print3").value))
 
    {var val ="Liancourt Rocks"
    if(val == (document.getElementById("print4").value))
        
        {var val ="Methane Hydrate"
        if(val == (document.getElementById("print5").value))
 
            {alert("Wow! Perfect! You've studied a lot about Dokdo.");
            window.open('../wow/index.html');
            }
                else{alert("Goal is in front of you!");}
                }
 
                    else{alert("Let's do a little more!");}
                    }
 
                        else{alert("Just try harder.");}
                            }
 
        	                    else{alert("We'll study again!");}
                                }
                                
                                    else{alert("Let's do it again after you cool off. You have to work really hard.");}
    	                            }