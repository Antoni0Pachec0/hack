//lib.rs
//El gato significa que aplicara para todo el contrato inteligente
#![no std]
//Lo de desoues del "use" significa que crearemos una caja que empaquetará todo el codigo
//Modulo llamado gstd, msg util para mandar y resivir informacion de contratos inteligentes.
//prelude paquete que sirve para utilizar los datos mas importantes en el Smart Contract
use gstd::(msg, prelude::*);
    
#[no_mangle]

extern "C" fn init(){

}

//handle esta a la escucha validaciones y regresa una respuesta
extern "C" fn handle(){
    //primera posicion, payload informacion que viaja entre contratos inteligentes para validar que quiero hacer
    //str ampearson en lugar de string es lo que pondremos en lugar de un payload
    //value = 0
    msg::reply("Hola mundo".to_string(), 0).expect("Errorzasooo")
}

//recibe la respuesta
extern "C" fn handle_reply(){
    
}

//Se utiliza para la interaccion con otro contrato o un frond
extern "C" fn state(){
    
}