// score: 160
function cyberReindeer(road, time) {
  let moves = [road];
  const _road = ("." + road.slice(1)).replace(/\|/g, "*");
  let a = 0;

  for(let i = 1; i < time; i++) {
    if(i == 5) road = road.replace(/\|/g, "*");
    const newRoad = road.replace(/S[\.\*]/, `${_road[a]}S`);
    if(newRoad != road) a++;
    road = newRoad;
    moves.push(road);
  }

  return moves;
}

module.exports = cyberReindeer;

const road = 'S..|...|..';
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/