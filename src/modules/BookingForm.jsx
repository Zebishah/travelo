import "../css/travelo.css";
import image from "../images/15184430_5571341-removebg.png";
const BookingForm = () => {
  return (
    <div>
      <section className="book" id="book">
        <div className="book-head">
          <h1 className="heading">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span className="space">-</span>
            <span>n</span>
            <span>o</span>
            <span>w</span>
          </h1>
        </div>
        <div className="row">
          <div className="image images">
            <img src={image} alt="" />
          </div>
          <form action className="for forms">
            <div className="form">
              <div className="inputBox">
                <h3>Where to</h3>
                <input type="text" placeholder="place name" />
              </div>
              <div className="inputBox">
                <h3>How many</h3>
                <input type="number" placeholder="number of guests" />
              </div>
              <div className="inputBox">
                <h3>Arrivals</h3>
                <input type="date" />
              </div>
              <div className="inputBox">
                <h3>Leaving</h3>
                <input type="date" />
              </div>
            </div>
            <input type="submit" className="btn3" defaultValue="Book Now" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingForm;
