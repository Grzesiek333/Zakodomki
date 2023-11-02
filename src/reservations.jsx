import { useEffect, useState } from "react";
import supabase from "./services/supabase";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";

function RangeCalendar() {
  const [dates, setDates] = useState(null);
  const navigation = useNavigate();

  const handleDateChange = (e) => {
    setDates(e.value);
  };

  async function handleSave() {
    if (dates && dates.length % 2 === 0) {
      const reservationsToInsert = [];
  
      // Przekształć wybrane daty na pary "start_date" i "end_date" z korektą o jeden dzień
      for (let i = 0; i < dates.length; i += 2) {
        const startDate = new Date(dates[i]);
        startDate.setDate(startDate.getDate() + 1); // Dodaj jeden dzień
  
        const endDate = new Date(dates[i + 1]);
        endDate.setDate(endDate.getDate() + 1); // Dodaj jeden dzień
  
        if (startDate && endDate) {
          reservationsToInsert.push({
            start_date: startDate,
            end_date: endDate,
          });
        }
      }
  
      // Wyślij sformatowane pary "start_date" i "end_date" do API
      const { data, error } = await supabase
        .from("reservations")
        .insert(reservationsToInsert)
        .select();
  
      if (!error) {
        console.log("Zapisane rezerwacje:", reservationsToInsert);
        // Możesz dodać odpowiednią obsługę po zapisaniu danych do API
      } else {
        console.error("Wystąpił błąd podczas zapisywania danych:", error);
      }
    }
  }
  

  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={dates}
        onChange={handleDateChange}
        dateFormat="dd/mm/yy"
        selectionMode="range"
        readOnlyInput
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
// component Rezerwacje

export default function Reservations() {
  const navigation = useNavigate();

  const [Date_reservation, setDate_reservation] = useState(null);

  useEffect(() => {
    
    getDate_reservation();
  }, []);
  async function getDate_reservation() {
    let { data, error } = await supabase.from("reservations").select("*");

    if (!error) {
      setDate_reservation(data);
      return;
    }

    console.error("something went wrong", error);
  }
  return (
    <>
      <h1>Rezerwacje</h1>

      <hr />
      <RangeCalendar />

    </>
  );
}

