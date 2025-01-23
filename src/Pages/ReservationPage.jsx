import React from "react";

const ReservationPage = () => {
  return (
    <div>
      <div className="flex items-center py-6 flex-col justify-center gap-3">
        <h2 className="text-[50px] font-semibold font-[Playfair-Display]">
          Book Your Table
        </h2>
        <p>Alternatively, dial +911234567890 or complete the form.</p>
      </div>
      <div className="flex-col w-full gap-20 flex items-center justify-evenly m-auto">
        <form className="flex flex-col gap-4 ">
          <div className="flex gap-4">
            <div>
              <label htmlFor="name" required></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                className="w-80 border-2 text-md px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="Phone" required></label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="w-80 border-2 text-md px-2 py-1"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <label htmlFor="email" required></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-80 border-2 text-md px-2 py-1"
              />
            </div>

            <div>
              <label htmlFor="Date"></label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="date"
                className="w-80 border-2 text-md px-2 py-1"
              />
            </div>
          </div>

          <div className="flex gap-4 ">
            <div>
              <label htmlFor="Select Time" required></label>
              <input
                type="time"
                name="select time"
                id="select time"
                placeholder="select Time"
                className="w-80 border-2 text-md px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="seats" required></label>
              <select name="seats" id="seats">
                <option selected className="w-80 border-2 text-md px-2 py-1">
                  Number Of seats
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5">6</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message"></label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="meassge..."
              className="w-full h-16 border-2 text-md px-2 py-1"
            />
          </div>
          <div className="justify-center flex">
            <button className="border-2 border-[#E27D60] px-6 py-2 rounded-md text-[#E27D60] text-center font-semibold">
              Book Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;
