import React from "react";
import chair from "../../../assets/images/chair.png";
import "react-calendar/dist/Calendar.css";
import { DayPicker } from "react-day-picker";
import chairBg from "../../../assets/images/bg.png"

const AppointmentBanner = ({selected, setSelected}) => {
//   const [selected, setSelected] = useState(new Date());
  return (
    <section>
      <div className="hero"
        style={{ background: `url(${chairBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat:'no-repeat' }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="mr-8">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            ></DayPicker>
          </div>
        </div>
      </div>
      {/* <h2 className="text-center text-2xl font-bold text-primary mt-14">
        You picked {format(selected, "PP")}.
      </h2> */}
    </section>
  );
};

export default AppointmentBanner;
