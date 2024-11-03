import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShifts, createShift, updateShift, deleteShift } from '../redux/actions/shiftActions';
import ShiftList from '../components/ShiftList';
import ShiftForm from '../components/ShiftForm';

const ShiftsContainer = () => {
  const dispatch = useDispatch();
  const { shifts, loading, error } = useSelector((state) => state.shifts);

  useEffect(() => {
    dispatch(fetchShifts());
  }, [dispatch]);

  const handleCreateShift = (shiftData) => {
    dispatch(createShift(shiftData));
  };

  const handleUpdateShift = (updatedShift) => {
    dispatch(updateShift(updatedShift));
  };

  const handleDeleteShift = (shiftId) => {
    dispatch(deleteShift(shiftId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ShiftList shifts={shifts} onDelete={handleDeleteShift} />
      <ShiftForm onCreate={handleCreateShift} onUpdate={handleUpdateShift} />
    </div>
  );
};

export default ShiftsContainer;