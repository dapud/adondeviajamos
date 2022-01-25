              
              class oferta { 
                constructor (tipo, destino, dias, precio, pension){
               
          
                  this.tipo = tipo;
                  this.destino = destino;
                  this.dias = dias;
                  this.precio = precio;
                  this.pension = pension;
          
               }
          
                  mensaje (){
                  alert(" El viaje es de tipo " + this.tipo + ", el mejor destino para tu eleccion es " + this.destino + ", la duracion del viaje es de " + this.dias + " dias, incluye  " + this.pension + " y el valor por persona es de $" + this.precio + ".-");
                  } 
              }
            
              
          
               const oferta1 = new oferta ("aventura", "mendoza", 10, 20000, "media pension ");
               const oferta2 = new oferta ("relax", "san juan ", 15, 30000, "pension completa");
               const oferta3 = new oferta ("romantica", "tucuman", 17, 40000, "media pension");
               const oferta4 = new oferta ("diversion", "san carlos de bariloche", 25, 60000, "pension completa");
               const oferta5 = new oferta ("cultura", "neuquen", 5, 5000, "media pension");
               
               
              
               const imagenesEsc = document.querySelector("#hola")
               imagenesEsc.addEventListener("click", () => {
               console.log ("funciona")
      
            
            

         
       


               
               
                  pedido = prompt  ("que tipo de viaje quieres tener? elige: 1-Aventura, 2-Relax, 3-Romantico, 4-Diversion o 5-Cultural " ) ;
          
          
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
                  };
                  alert ("A continuacion te detallamos todos los destinos nacionales a los que podes acceder")
          const destinoNacional  = [ "San Fernando del Valle de Catamarca " , "Resistencia ", "Rawson ", "Córdoba ", "Corrientes ", "Paraná ", "Formosa ", "San Salvador de Jujuy ", "Santa Rosa ", "La Rioja ", "Mendoza ", "Posadas ", "Neuquén ", "Viedma ", "Salta ", "San Juan ", "San Luis ", "Río Gallegos ", "Santa Fe ", "Santiago del Estero ", "Ushuaia ", "San Miguel de Tucumán "]; 
          
          alert(destinoNacional.join("\n"));
          alert ("te lo ordeno alfabeticamente para que sea mas facil encontrar tu destino")
          alert(destinoNacional.sort());  
        
         
          
          


       
         


         
         
        
        const nuevosDestinos = document.getElementById ("nuevosDestinos");
         for( let i= 0; i< destinoNacional.length; i++) {
         const li  = document.createElement ('li');
         li.textContent = destinoNacional[i];
         nuevosDestinos.appendChild(li);
         console.log (nuevosDestinos)
         }

         
         })