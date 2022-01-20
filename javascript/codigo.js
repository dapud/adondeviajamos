              
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
               
               const oferta6 = new oferta ("Relax","san martin de los andes",30,80000," pension completa");
               const oferta7 = new oferta ("Relax","Chaco",15,45000," pension completa");
               const oferta8 = new oferta ("Diversion","Chubut",15,45000,"Media pension");
               const oferta9 = new oferta ("Romantico","Córdoba"   ,15,45000," pension completa");
               const oferta10 = new oferta ("Cultural","Corrientes"   ,15,45000," desayuno");
               const oferta11 = new oferta ("Aventura","Entre Ríos",7,15000,"pension completa");
               const oferta12 = new oferta ("Relax","Formosa",7,15000,"desayuno");
               const oferta13 = new oferta ("Diversion","Jujuy",7,15000,"pension completa");
               const oferta14 = new oferta ("Romantico","La Pampa",7,15000,"Media pension");
               const oferta15 = new oferta ("Cultural","La Rioja",7,15000,"desayuno");
               const oferta16 = new oferta ("Aventura","Mendoza",25,70000,"Media pension");
               const oferta17 = new oferta ("Relax","Misiones",25,70000,"pension completa");
               const oferta18 = new oferta ("Diversion","Neuquén",25,70000,"Media pension");
               const oferta19 = new oferta ("Romantico","Río Negro",25,70000,"completa");
               const oferta20 = new oferta ("Cultural","Salta",25,70000,"Media pension");
               const oferta21 = new oferta ("Aventura","San Juan",10,35000,"pension completa");
               const oferta22 = new oferta ("Relax","San Luis",10,35000,"Media pension ");
               const oferta23 = new oferta ("Diversion","Santa Cruz",10,35000,"media pension");
               const oferta24 = new oferta ("Romantico","Santa Fe",10,35000,"desayuno");
               const oferta25 = new oferta ("Cultural","Santiago del Estero",10,35000,"pension completa");
               const oferta26 = new oferta ("Aventura","Tierra del Fuego",10,35000,"Media pension");
               const oferta27 = new oferta ("Relax","Tucumán",10,35000,"pension completa");
               
              


               
               
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
          alert ("que tipo de viaje quieres emprender");


       
         


         const nuevosDestinos = document.getElementById ("nuevosDestinos");
         for( let i= 0; i< destinoNacional.length; i++) {
         const li  = document.createElement ('li');
         li.textContent = destinoNacional[i];
         nuevosDestinos.appendChild(li);
         console.log (nuevosDestinos)
         
        }
        