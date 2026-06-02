import "./BookingForm.css";
import { useState } from "react";

function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking">
      <h2 className="section-title">Book Your Bridal Session</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="date" required />
        <textarea placeholder="Tell us about your event"></textarea>

        <button type="submit">Submit Booking</button>

        {submitted && (
          <p className="success-message">
            Your booking inquiry has been submitted successfully.
          </p>
        )}
      </form>
    </section>
  );
}

export default BookingForm;