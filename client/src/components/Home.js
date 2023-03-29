import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const getData = async (e) => {
    const res = await fetch("http://localhost:8003/getdata", {
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

  const deleteUser = async (id) => {
    const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);
    if (res2.status === 422 || !deletedata) {
      console.log("Error");
    } else {
      console.log("User Deleted");
      getData();
    }
  };

  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-3">
            <Link to="/new">
              <button className="btn btn-primary">Add Data</button>
            </Link>
          </div>

          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">EmailID</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td className="d-flex justify-content-between">
                        <Link to={`view/${element._id}`}>
                          <button className="btn btn-success">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </Link>
                        <Link to={`edit/${element._id}`}>
                          <button className="btn btn-primary">
                            <i class="fa-solid fa-pen"></i>
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(element._id)}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
