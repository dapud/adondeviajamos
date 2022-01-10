



  /* class oferta { 
      constructor (tipo, destino, dias, precio, pension){
     

        this.tipo = tipo;
        this.destino = destino;
        this.dias = dias;
        this.precio = precio;
        this.pension = pension;

     }

        mensaje (){
        alert(" El viaje es de tipo" + this.tipo + " el destino es " + this.destino + "con una duracion ");
        }
    }
    
    

     const oferta1 = new oferta ("aventura", "mendoza", 10, 20000, "media ");
     const oferta2 = new oferta ("relax", "san juan ", 15, 30000, "completa");
     const oferta3 = new oferta ("romantica", "tucuman", 17, 40000, "media");
     const oferta4 = new oferta ("diversion", "san carlos de bariloche", 25, 60000, "completa");
     const oferta5 = new oferta ("cultura", "neuquen", 5, 5000, "desayuno");


     
        pedido = prompt ("que tipo de viaje quieres tener? elige: Aventura, Relax, Romantico, Diversion o Cultural ") ;


        switch (pedido) {
            case "Aventura":
                alert("elegiste  Viaje de Aventura");

                if (pedido === "Aventura") {
                    oferta1.mensaje();
                    break;

                }
                case "Relax":
                alert("elegiste viaje de Relax");

                if (pedido === "Relax") {
                    oferta2.mensaje();
                    break;

                }
                case "Romantico":
                alert("elegiste un viaje bien Romantico");

                if (pedido === "Romantico") {
                    oferta3.mensaje();
                    break;

                }
                case "Diversion":
                alert("elegiste  un super viaje de Diversion");

                if (pedido === "Diversion") {
                    oferta4.mensaje();
                    break;

                }
                case "Cultural":
                alert("elegiste un viaje Cultural");

                if (pedido === "Cultural") {
                    oferta5.mensaje();
                    break;

                }
                     default:
                     alert("creo que no entendi lo que escribiste, podrias verificar si lo escribiste igual a las opciones?");
        }
    

 */

     
   
  
  
     

   




/* 

alert(
            "Elige 4 prendas que te gusten del siguiente listado. Vamos con la eleccion de la primera de ellas")
        for (var f = 0; f < 5; f++) {

            carrito = prompt("remera, pantalon, medias, gorro");

            switch (carrito) {
                case "remera":
                    alert("elegiste una remera");

                    if (carrito === "remera") {
                        cRemera = cRemera + 1;
                        alert("se agrega a tu carrito de compras " + cRemera + " Remera x $" + remera);
                        break;

                    }
                    case "pantalon":
                        alert("elegiste un pantalon");
                        if (carrito === "pantalon") {
                            cPantalon = cPantalon + 1;
                            alert(" se agrega a tu carrito de compras " + cPantalon + " pantalon x $" + pantalon);
                            break;
                        }

                    case "medias":
                        alert("elegiste un par de medias");
                        if (carrito === "medias") {
                                cMedias = cMedias + 1;
                                alert("se agrega a tu carrito de compras " + cMedias + " par de medias x $" + medias);
                                break;
                        }

                    case "gorro":
                        alert("elegiste un gorro");
                        if (carrito === "gorro") {
                            cGorro = cGorro + 1;
                            alert("se agrega a tu carrito de compras " + cGorro + " gorro x $" + gorro);
                            break;
                        }
                         default:
                         alert("creo que no entendi el nombre de la prenda, podrias escribirlo nuevamente?");
            }
        }

        alert(" Quieres saber cual es el subtotal por tipo de prenda ?")

        function subtotal(a, b) {
            return a * b;
        }
        tRemera = subtotal(cRemera, remera);
        if (cRemera != 0) {
            alert(" compraste " + cRemera + " remeras por un total de $ " + tRemera);
        } else {
            alert("no compraste remeras")
        };


        tPantalon = subtotal(cPantalon, pantalon);
        if (cPantalon != 0) {
            alert(" Compraste " + cPantalon + " pantalon/nes por un total de $ " + tPantalon);
        } else {
            alert("no compraste pantalones")
        };


        tMedias = subtotal(cMedias, medias);
        if (cMedias != 0) {
            alert(" compraste " + cMedias + " par Medias por un total de $ " + tMedias);
        } else {
            alert("no compraste Medias")
        };


        tGorro = subtotal(cGorro, gorro);
        if (cGorro != 0) {
            alert(" compraste " + cGorro + " Gorro/s por un total de $ " + tGorro);
        } else {
            alert(" no compraste gorros")
        };

        precioTotal = tRemera + tPantalon + tMedias + tGorro;
        alert(" El monto final de la compra fue $ " + precioTotal + ".-  Gracias " + nombre + " por tu compra. ");

  */































/* 
        let remera = 3000
        let pantalon = 8000
        let medias = 1500
        let gorro = 2000
        let cRemera = 0
        let cPantalon = 0
        let cMedias = 0
        let cGorro = 0
        let carrito = 0
        let tRemera = 0
        let tPantalon = 0
        let tMedias = 0
        let tGorro = 0
        let precioTotal = 0

 */












 /* class productoViajes {
     constructor ( tipo, destino, dias, precio, pension){
        this.tipo = tipo;
        this.destino = destino;
        this.dias = dias;
        this.precio = precio;
        this.pension = pension;

     }
     mostrarViaje (){

        alert (" el viajes a ${this.destino}, denominado de ${this.tipo}, consta de ${ this.dias}, posee una pension ${this.pension) y su valor es de ${this.valo}");

     }   
 }

    const tipo = tipo prompt 






    const Aventura1 = {

        detinoAventura: "Mendoza",
        cantidadDias: "10 dias",
        pension: "completa",
        precio: 10.000

    }
    const Aventura2 = { 

        detinoAventura: "Bariloche",
        cantidadDias: "10 dias",
        pension: "completa",
        precio: 10.000

    }
    const Aventura3 = {

        detinoAventura: "salta",
        cantidadDias: "10 dias",
        pension: "completa",
        precio: 10.000

    }
    





        let nombre = prompt(" Buenas tardes, cual es tu nombre?");
        alert("hola " + nombre + " Como estas?, tienes ganas de viajar? Vamos !!!");

        alert(
            "tenemos 5 diferentes alternativas para ofrecerte, elige de la siguiente lista el tipo de viaje que quieres realizar")
        for (var f = 0; f < 5; f++) {

            carrito = prompt("Turismo de Aventura, Turismo Cultural, Turismo de relax, turismo de diversion, turismo de romance");

            switch (carrito) {
                case "remera":
                    alert("elegiste una remera");

                    if (carrito === "remeraTurismo de Aventura") {
                        cRemera = cRemera + 1;
                        alert("se agrega a tu carrito de compras " + cRemera + " Remera x $" + remera);
                        break;

                    }
                    case "pantalon":
                        alert("elegiste un pantalon");
                        if (carrito === "pantalon") {
                            cPantalon = cPantalon + 1;
                            alert(" se agrega a tu carrito de compras " + cPantalon + " pantalon x $" + pantalon);
                            break;
                        }

                    case "medias":
                        alert("elegiste un par de medias");
                        if (carrito === "medias") {
                                cMedias = cMedias + 1;
                                alert("se agrega a tu carrito de compras " + cMedias + " par de medias x $" + medias);
                                break;
                        }

                    case "gorro":
                        alert("elegiste un gorro");
                        if (carrito === "gorro") {
                            cGorro = cGorro + 1;
                            alert("se agrega a tu carrito de compras " + cGorro + " gorro x $" + gorro);
                            break;
                        }
                         default:
                         alert("creo que no entendi el nombre de la prenda, podrias escribirlo nuevamente?");
            }
        }

        alert(" Quieres saber cual es el subtotal por tipo de prenda ?")

        function subtotal(a, b) {
            return a * b;
        }
        tRemera = subtotal(cRemera, remera);
        if (cRemera != 0) {
            alert(" compraste " + cRemera + " remeras por un total de $ " + tRemera);
        } else {
            alert("no compraste remeras")
        };


        tPantalon = subtotal(cPantalon, pantalon);
        if (cPantalon != 0) {
            alert(" Compraste " + cPantalon + " pantalon/nes por un total de $ " + tPantalon);
        } else {
            alert("no compraste pantalones")
        };


        tMedias = subtotal(cMedias, medias);
        if (cMedias != 0) {
            alert(" compraste " + cMedias + " par Medias por un total de $ " + tMedias);
        } else {
            alert("no compraste Medias")
        };


        tGorro = subtotal(cGorro, gorro);
        if (cGorro != 0) {
            alert(" compraste " + cGorro + " Gorro/s por un total de $ " + tGorro);
        } else {
            alert(" no compraste gorros")
        };

        precioTotal = tRemera + tPantalon + tMedias + tGorro;
        alert(" El monto final de la compra fue $ " + precioTotal + ".-  Gracias " + nombre + " por tu compra. ");

 








        

 */
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