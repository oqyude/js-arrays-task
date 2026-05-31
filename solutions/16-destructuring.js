const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) return null;

  let nearest = locations[0];
  let minDistance = getDistance(nearest[1], currentPoint);

  for (const [name, point] of locations) {
    const distance = getDistance(point, currentPoint);

    if (distance < minDistance) {
      nearest = [name, point];
      minDistance = distance;
    }
  }

  return nearest;
};
// END
