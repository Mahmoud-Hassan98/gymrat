import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Mycoach() {
  const [coachData, setCoachData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:8000/payment/getcoachforuser', config);
        setCoachData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error retrieving coach data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#222222" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              {coachData.map((coach, index) => (
                <div className="card" style={{ borderRadius: 15 }} key={index}>
                  <div className="card-body p-4">
                    <div className="d-flex text-black">
                      <div className="flex-shrink-0">
                        <img
                        src={`data:image/jpeg;base64,${coach.images[0]}`}
                          alt="Generic placeholder image"
                          className="img-fluid"
                          style={{ width: 180, borderRadius: 10 }}
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">{coach.first_name} {coach.last_name}</h5>
                        <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                          {coach.details}
                        </p>
                        <div
                          className="d-flex justify-content-start rounded-3 p-2 mb-2"
                          style={{ backgroundColor: "#efefef" }}
                        >
                          <div>
                            <p className="small text-muted mb-1">Articles</p>
                            <p className="mb-0"></p>
                          </div>
                          <div className="px-3">
                            <p className="small text-muted mb-1">Followers</p>
                            <p className="mb-0">{coach.followers}</p>
                          </div>
                          <div>
                            <p className="small text-muted mb-1">Rating</p>
                            <p className="mb-0">{coach.rating}</p>
                          </div>
                        </div>
                        <div className="d-flex pt-1">
                          <button
                            type="button"
                            className="btn btn-outline-primary me-1 flex-grow-1"
                            style={{ backgroundColor: "#ffdd00", border: "none", color: "black" }}
                            onMouseOver={(e) => {
                              e.target.style.backgroundColor = "black";
                              e.target.style.color = "white";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.backgroundColor = "#ffdd00";
                              e.target.style.color = "black";
                            }}
                          >
                            Chat
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary flex-grow-1"
                            style={{ backgroundColor: "black", border: "none" }}
                            onMouseOver={(e) => {
                              e.target.style.backgroundColor = "#ffdd00";
                              e.target.style.color = "black";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.backgroundColor = "black";
                              e.target.style.color = "white";
                            }}
                          >
                            Show profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
