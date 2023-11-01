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

      // Przekształć wybrane daty na pary "start_date" i "end_date"
      for (let i = 0; i < dates.length; i += 2) {
        const startDate = dates[i];
        const endDate = dates[i + 1];

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
    getSession();
    getDate_reservation();
  }, []);

  async function getSession() {
    const { data, error } = await supabase.auth.getSession();

    console.log(data, error);

    if (!data.session) {
      navigation("/");
    }
  }

  async function getDate_reservation() {
    let { data, error } = await supabase.from("reservations").select("*");

    if (!error) {
      setDate_reservation(data);
      return;
    }

    console.error("something went wrong", error);
  }

  async function onLogout() {
    let { error } = await supabase.auth.signOut();

    navigation("/");
  }



  return (
    <>
      <h1>Rezerwacje</h1>
      <button onClick={onLogout}>Logout</button>
      <hr />
      <RangeCalendar />

    </>
  );
}
