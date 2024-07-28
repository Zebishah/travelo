import "../css/travelo.css";
import image from "../images/cont.png";
const ContactUs = () => {
  return (
    <section id="contact">
      <div className="con-head">
        <h1 className="heading">
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </h1>
      </div>
      <div className="row">
        <div className="image images">
          <img src={image} alt="" />
        </div>
        <form action className="forms">
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input className="chng" type="email" placeholder="email" />
          </div>
          <div className="inputBox2">
            <input type="text" placeholder="number" />
            <input className="chng1" type="text" placeholder="subject" />
          </div>
          <textarea
            placeholder=" Write your Message"
            name
            id
            cols={30}
            rows={10}
            defaultValue={""}
          />
          <input type="submit" className="btn" defaultValue="send message" />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
