window.onload=function()
    { 
        var  cadenaHTML1="";
          var  cadenaHTML2="";
          var  cadenaHTML3="";
          var  cadenaHTML4="";
          var columna=1

          for (contador=1; contador<14;contador++){
            switch(columna){
              case 1:
                cadenaHTML1 = cadenaHTML1 + '<img src="../imagenes/bandejas/' + contador + '.jpg" style="margin-top: 8px; vertical-align: middle;width: 100%;">';
                columna++;
                break;
              case 2:
                cadenaHTML2 = cadenaHTML2 + '<img src="../imagenes/bandejas/' + contador + '.jpg" style="margin-top: 8px; vertical-align: middle;width: 100%;">';
                columna++;
                break;
              case 3:
                cadenaHTML3 = cadenaHTML3 + '<img src="../imagenes/bandejas/' + contador + '.jpg" style="margin-top: 8px; vertical-align: middle;width: 100%;">';
                columna++;
                break;
              case 4:
                cadenaHTML4 = cadenaHTML4 + '<img src="../imagenes/bandejas/' + contador + '.jpg" style="margin-top: 8px; vertical-align: middle;width: 100%;">';
                columna = 1;
                break;
            }
          }
          
          document.getElementById('columna1').innerHTML = cadenaHTML1;
          document.getElementById('columna2').innerHTML = cadenaHTML2;
          document.getElementById('columna3').innerHTML = cadenaHTML3;
          document.getElementById('columna4').innerHTML = cadenaHTML4;
    }
