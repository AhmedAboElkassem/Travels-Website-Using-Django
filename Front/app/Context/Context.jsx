import { createContext, useState } from "react";

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [selectedTrip, setSelectedTrip] = useState([]);
  const [selectedHotel, setselectedHotel] = useState(null);
  return (
    <TripContext.Provider
      value={{ selectedTrip, setSelectedTrip, selectedHotel, setselectedHotel }}
    >
      {children}
    </TripContext.Provider>
  );
};
