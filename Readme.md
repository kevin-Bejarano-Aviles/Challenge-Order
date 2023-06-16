# Install dependencies 

```npm i```
# Run application
1. Run ```npx tsc```
2. Run ```node dist/app.js```

## Challenge
- Implementa una clase llamada Order que cumpla con el principio de Responsabilidad Única. La clase Order debe ser responsable únicamente de mantener los datos de una orden de compra y no debe tener ninguna lógica de validación o persistencia.
- Además, implementa una clase separada llamada OrderValidator que se encargue de validar los datos de una orden. La clase OrderValidator debe tener un método llamado validate(order) que reciba un objeto order y verifique si los datos de la orden son válidos.
- Por último, implementa una clase separada llamada OrderRepository que se encargue de la persistencia de las órdenes. La clase OrderRepository debe tener un método llamado save(order) que reciba un objeto order y guarde los datos de la orden en algún tipo de almacenamiento (por ejemplo, una base de datos o un archivo).
El objetivo es asegurarse de que cada clase tenga una única responsabilidad y que estén separadas adecuadamente.