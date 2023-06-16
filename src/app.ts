import { Order } from "./Order";
import { OrderRepository } from "./OrderRepository";
import { OrderValidator } from "./OrderValidator";

const newOrder = new Order(1,1500,'Producto: papas fritas',5,new Date());
const validator = new OrderValidator()
const saveOrder = new OrderRepository()


if(validator.validateOrder(newOrder)){
     console.log(saveOrder.save(newOrder));
}
else {
    console.log('Orden no validada');
}