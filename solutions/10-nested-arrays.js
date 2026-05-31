// BEGIN
const getSuperSeriesWinner = (scores) => {
  let canadaWins = 0;
  let ussrWins = 0;

  for (const [canada, ussr] of scores) {
    if (canada > ussr) canadaWins += 1;
    else if (ussr > canada) ussrWins += 1;
  }

  if (canadaWins > ussrWins) return 'canada';
  if (ussrWins > canadaWins) return 'ussr';

  return null;
};

export default getSuperSeriesWinner;
// END
