# **Instrucciones**

## **Reto #19: 🎄 El viaje secreto de Papá Noel**
#### **Fácil**

Tu puntuación: Tu puntuación:  ⭐⭐⭐⭐⭐🌟🌟

¡El GPS del trineo se ha vuelto loco! 😱 Papá Noel tiene los **tramos de su viaje**, pero están todos desordenados.

Tu misión es **reconstruir la ruta completa** desde el origen hasta el destino final.

Ten en cuenta: **El primer elemento del array es siempre el primer tramo del viaje**. A partir de ahí, debes ir conectando los destinos con los siguientes orígenes.

🧩 **Ejemplos**:
```js
revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
])
// → ['MEX', 'CAN', 'UK', 'GER']

revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
])
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
])
// → ['STA', 'HYD']
```

🔎 **A tener en cuenta**:

- No hay rutas duplicadas ni ciclos en el camino de Papá Noel.
- Puede haber tramos que no pertenezcan a la ruta; estos deben ignorarse.