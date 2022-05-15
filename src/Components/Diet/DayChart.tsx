import React, { useEffect, useState } from 'react';
import FoodSection from './FoodSection';

function DayChart() {
  return (
    <div>
      <FoodSection section="BREAKFAST" />
      <FoodSection section="LUNCH" />
      <FoodSection section="SNACKS" />
      <FoodSection section="DINNER" />
    </div>
  );
}

export default DayChart;
