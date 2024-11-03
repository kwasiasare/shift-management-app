// src/components/ShiftList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
// ...other imports

const ShiftList = () => {
  const shifts = useSelector((state) => state.shifts.shifts);

  return (
    <div>
      {shifts.map((shift) => (
        <div key={shift.shiftId}>
          {/* Display shift details */}
        </div>
      ))}
    </div>
  );
};

export default ShiftList;