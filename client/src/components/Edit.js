import React , {useState,useEffect} from "react";
import {Link , useParams, useNavigate} from "react-router-dom";
const Edit = () => {
  const navigate = useNavigate();
  const [inputval,setinputval] = useState({
    name: "",
    email:"",
    phone:"",
    bookid:"",
    time:"",
    droneshot:""
  })
  
  const setdata = (e) => {
    const{name,value} = e.target;
    setinputval((preval)=>{
      return {
        ...preval,
        [name]:value
      }
    })
  }

  const {id} = useParams("");
  const getData = async () => {
    const res = await fetch(`http://localhost:8003/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      setinputval(data);
      console.log("Get Data");
    }
  };
 
  useEffect(()=>{
    getData();
  },[])

  const updateuser = async(e)=>{
    e.preventDefault();
    const { name, email, phone, bookid, time, droneshot } = inputval;
    const res2 = await fetch(`http://localhost:8003/updateUser/${id}`,{
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name, email, phone, bookid, time, droneshot
      })
    });
    const data2 = await res2.json();
      console.log(data2);

      if(res2.status === 422 || !data2) {
        alert("Fill Data");
      }
      else
      {
        alert("Data Changed");
        navigate("/");
      }
  }

  return (
    <div className="edit">
      <Link to="/"><button className="btn btn-primary mt-3 ms-3">Back</button></Link>
      <form className="mt-5 ms-5 me-5">
        <div className="row">
          <div className="mb-3 col-lg-6 col md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={inputval.name}
              onChange={setdata}
              name="name"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={inputval.email}
              onChange={setdata}
              name="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3 col-lg-6 col md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              PhoneNumber
            </label>
            <input
              type="number"
              value={inputval.phone}
              onChange={setdata}
              name="phone"
              className="form-control"
              id="phno"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Booking ID
            </label>
            <input
              type="number"
              value={inputval.bookid}
              name="bookid"
              onChange={setdata}
              className="form-control"
              id="bookid"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Time
            </label>
            <input
              type="time"
              value={inputval.time}
              onChange={setdata}
              name="time"
              className="form-control"
              id="time"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Drone Shot Name
            </label>
            <input
              type="text"
              value={inputval.droneshot}
              onChange={setdata}
              name="droneshot"
              className="form-control"
              id="shotname"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" onClick={updateuser} className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;