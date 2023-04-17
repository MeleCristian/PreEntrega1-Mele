let item1=0;
let item2=0;
let item3=0;
let item4=0;
let item5=0;
let aux=false;
let opcion=0;
let suma=0;
let sumaAux=0;
do{
    opcion=Number(prompt('Elija la opcion q desea: 1-Agregar producto. 2-Quitar producto. 3- Ver carrito.  4-Terminar compra. 5- Salir'));

    switch(opcion){
        
        case 1:
            sumaAux= Number(prompt(" Ingrese el valor del producto: "));
            if(sumaAux>0){
                if(item1 == 0){
                    item1= sumaAux;
                    suma= suma+ sumaAux;
                }else if(item2 == 0){
                    item2= sumaAux;
                    suma= suma+ sumaAux;}
                else if(item3 == 0){
                        item3= sumaAux;
                        suma= suma+ sumaAux;}
                else if(item4 == 0){
                        item4= sumaAux;
                        suma= suma+ sumaAux;}
                else if(item5 == 0){
                        item5= sumaAux;
                        suma= suma+ sumaAux;}
                else {
                    alert(" No puede agregar mas items al carrito, Quite uno para poder agregar otro. Se lo redigira al menu principal precione ACEPTAR para continuar");
                }
                break;
            }else{
                alert("Valor invalido, recordar q los precios deben ser mayore a 0. Se lo redigira al menu principal luego de presionar Aceptar")
            }
            break;

        case 2:
            opcion=Number(prompt("Seleccione el item q desea quitar: 1- "+item1 +". 2- "+item2+". 3-"+item3+". 4-"+item4+". 5-"+item5+". 6-volver al menu."))
            switch(opcion){
                case 1:
                    suma= suma-item1;
                    item1=0;
                    break;
                case 2:
                    suma= suma-item2;
                    item2=0;
                    break;
                case 3:
                    suma= suma-item3;
                    item3=0;
                    break;
                case 4:
                    suma= suma-item4;
                    item4=0;
                    break;
                case 5:
                    suma= suma-item5;
                    item5=0;
                    break;
                case 6:
                    break;
                default:
                    alert("opcion incorrecta se lo redigira al menu principal luego de presionar ACEPTAR.")
            }
            break;

        case 3:
            alert("Los item son: 1- "+item1 +". 2- "+item2+". 3-"+item3+". 4-"+item4+". 5-"+item5+". Precione ACEPTAR para volver al menu principal.")
            break;

        case 4:
            if(suma>=5000){
                opcion=Number(prompt( "El total de la compra es "+suma+" Precione 1 Para confirmar o 2 para volver al menu principal"));
                switch(opcion){
                    case 1:
                        aux=true;
                        alert("Compra finalizada Gracias por elejir a 3d Printer Store su pedido estara llegando pronto!")
                        break;

                    case 2:
                        break;

                    default:
                        alert("Opcion incorrecta se lo redigira al menu principal luego de presionar ACEPTAR.")
                        break;
                }
            }else{
                alert("La compra minima son de $5000 agrege mas items al carrito o cambie algun item por otro de mayor valor. Se lo redigira al menu principal luego de presionar ACEPTAR.")
            }
            
            break;

        case 5:
            aux=true;
            alert("Gracias por utilizar nuestros servicios espero q hayan estado conformes");
            break;
        
        default:
            alert("La opcion marcada es incorrecta, vuelva a intentarlo luego de apretar ACEPTAR");
            break;

    }


}while( aux==false)

