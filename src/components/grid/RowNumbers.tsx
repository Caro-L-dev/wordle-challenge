export const RowNumbers = () => {
  const rowNumbers = [];

  for (let row = 0; row < 6; row++) {
    rowNumbers.push(
      <div key={row} className="m-1 text-center font-bold text-slate-200 my-3">
        {row + 1}
      </div>
    );
  }

  return rowNumbers;
};
