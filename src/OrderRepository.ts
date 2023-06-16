import { Order } from "./Order";
import fs from 'fs';
export class OrderRepository {


    public save (order:Order){
        const orderSave =JSON.stringify(order,null,2)
        fs.writeFile('./data/data.json',orderSave,(error)=>{
            if (error) {
                console.error('Error al guardar el archivo:', error);
              } else {
                console.log('El archivo se guardó correctamente.');
              }
        });

        return 'Order Save'
    }
}