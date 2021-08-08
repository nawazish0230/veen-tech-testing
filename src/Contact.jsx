import React , { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value} =event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };


    const formSubmit = (e) => {
        e.preventDefault();
        alert(` Hey ${data.fullname}. Your mobile no. is ${data.phone} and email is ${data.email}, Here You want to say that you are ${data.msg}`);
    };

return (
    <>
    <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
      Full Name
      </label>
  <input 
  type="text" 
  class="form-control" 
  id="exampleFormControlInput1"
  name="fullname"
  value={data.fullname}
  onChange={InputEvent} 
  placeholder="Enter your name" />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
      Phone No.
      </label>
  <input 
  type="number" 
  class="form-control" 
  id="exampleFormControlInput1"
  name="phone"
  value={data.phone}
  onChange={InputEvent} 
  placeholder="Phone number" />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
      Email address
      </label>
  <input 
  type="email" 
  class="form-control" 
  id="exampleFormControlInput1"
  name="email"
  value={data.email}
  onChange={InputEvent} 
  placeholder="name@example.com" />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
     Message (in one word)
      </label>
  <input 
  type="text" 
  class="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3" 
  name="msg"
  value={data.msg}
  onChange={InputEvent} />
</div>

<div className="col-auto">
    <button type="submit" class="btn btn-outline-primary">
        Submit form</button>
  </div>
                </form>
            </div>
        </div>
        </div>
    </>
);
};

export default Contact;