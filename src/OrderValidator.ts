import { Order } from './Order';
export class OrderValidator {
    

    public validateOrder (order:Order) {
        //?solucion 1
        /* const propertyInexistente:string[] = []
        Object.keys(order).forEach((prop) => {
        const value = order[prop as keyof Order];
                if(!value){
                    propertyInexistente.push(`${prop} dont exist`);
                }
        });
        return (propertyInexistente.length>0) ? propertyInexistente.join(' ') : 'Order validada correctamente' */
        //? solucion 2 
        const orderProperties:any [] = []
        Object.keys(order).forEach((prop) => {
            const value = order[prop as keyof Order];
    
            orderProperties.push(value);
            });
        return orderProperties.every((property) => {
            return (property)
        })
         
        /* const validaciones = [
            this.validateId(order.id),
            this.validatePrice(order.price),
            this.validateDetail(order.detail),
            this.validateCant(order.cant),
            this.validateDate(order.date),
        ]
        const orderValidada = validaciones.every((properties) => properties === true);
        return orderValidada */
    }
    /* private validateStrings (data:string){
        return (!data || typeof data !== 'string' || data.trim() !== '')
    }
    private validateNumbers (data:number){
        return (!data || typeof data !== 'number' || data > 0)
    }
    public validateDate (date:Date){
        return (!date  || date instanceof Date )
    }
    private validateId (id:number){
        return this.validateNumbers(id);
    }
    private validateCant (cant:number){
        return this.validateNumbers(cant);
    }
    private validateDetail (detail:string){
        return this.validateStrings(detail);

    }
    private validatePrice (price:number){
       return this.validateNumbers(price);

    }  */
}

