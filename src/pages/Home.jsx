import React, { useState } from 'react';
import { JourneyPicker } from '../components/JourneyPicker/JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState('');

  return (
    <div>
      <JourneyPicker onJourneyChange={setJourney} />;<p>{journey.journeyId}</p>
    </div>
  );
};
