
        class oferta { 
            constructor (tipo, destino, dias, precio, pension){
           
      
              this.tipo = tipo;
              this.destino = destino;
              this.dias = dias;
              this.precio = precio;
              this.pension = pension;
      
           }
      
              mensaje (){
              alert("El viaje es de tipo " + this.tipo + ", el mejor destino para tu eleccion es " + this.destino + ", la duracion del viaje es de " + this.dias + " dias, incluye pension " + this.pension + " y el valor por persona es de $" + this.precio + ".-");
              }
          }
          
          
      
           const oferta1 = new oferta ("aventura", "Mendoza", 10, 20000, "media ");
           const oferta2 = new oferta ("relax", "el Delta del Tigre ", 15, 30000, "completa");
           const oferta3 = new oferta ("romantico", "El Chalten", 17, 40000, "media");
           const oferta4 = new oferta ("diversion", "San Carlos de Bariloche", 25, 60000, "completa");
           const oferta5 = new oferta ("cultural", "Salta", 5, 5000, "media");
      
      
           
              pedido = prompt ("Hola !!! Que tipo de viaje quieres realizar? Elige: 1-Aventura, 2-Relax, 3-Romantico, 4-Diversion o 5-Cultural ") ;
      
      
              switch (pedido) {
                  case "1":
                      alert("Perfecto, elegiste el mejor viaje de Aventura, a continuacion te cuento los detalles.");
      
                      if (pedido === "1") {
                          oferta1.mensaje();
                          break;
      
                      }
                      case "2":
                      alert("Perfecto, elegiste el mejor viaje de Relax, a continuacion te cuento los detalles.");
      
                      if (pedido === "2") {
                          oferta2.mensaje();
                          break;
      
                      }
                      case "3":
                      alert("Perfecto, elegiste el mejor Viaje Romentico, a continuacion te cuento los detalles.");
      
                      if (pedido === "3") {
                          oferta3.mensaje();
                          break;
      
                      }
                      case "4":
                      alert("Perfecto, elegiste divertirte a full, a continuacion te cuento los detalles.");
      
                      if (pedido === "4") {
                          oferta4.mensaje();
                          break;
      
                      }
                      case "5":
                      alert("Perfecto, elegiste el mejor viaje Cultural, a continuacion te cuento los detalles.");
      
                      if (pedido === "5") {
                          oferta5.mensaje();
                          break;
      
                      }
                           default:
                           alert("Creo que no entendi lo que escribiste, podrias verificar que el nuemro de opcion sea la correcta?");
              }
              