import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link, useParams , useNavigate} from "react-router-dom";
const Description = () => {
  const navigate = useNavigate(); 
  const { id } = useParams("");
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
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
      setUserdata(data);
      console.log("Get Data");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const deleteUser = async(id) => {
    const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);
     if(res2.status === 422 || !deletedata)
     {
        console.log("Error");
     }
     else{
      console.log("User Deleted");
      navigate("/");
     }

  }
  return (
    <div className="description mt-5 ms-5 me-5">
      <h1 style={{ fontWeight: 400 }}>Welcome Soham Saha</h1>
      <Card sx={{ maxWidth: 700 }}>
        <CardContent>
          <div className="add_btn">
            <Link to={`/edit/${getuserdata._id}`}>
              <button className="btn btn-primary mx-2">
                <i class="fa-solid fa-pen"></i>
              </button>
            </Link>
            <button className="btn btn-danger mx-2" onClick={()=>deleteUser(getuserdata._id)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="/profile.png" style={{ width: 250 }} alt="Profile" />
              <h3 className="mt-4">
                Name:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Email :{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.email}</span>
              </h3>
              <h3 className="mt-3">
                Phone :{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.phone}</span>
              </h3>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <h3 className="mt-5">
                BookID :{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.bookid}</span>
              </h3>
              <h3 className="mt-3">
                Time :
                <span style={{ fontWeight: 400 }}>{getuserdata.time}</span>
              </h3>
              <h3 className="mt-3">
                Drone Shot :{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.droneshot}</span>
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Description;
