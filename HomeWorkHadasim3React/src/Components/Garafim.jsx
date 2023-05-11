import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getCountWhoVaccinated } from "../Redux/Vaccinations/VaccinationsThunk";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
  function Chart({ data }) {
    const chartData = {
      labels: ['חיסון ראשון', 'חיסון שני', 'חיסון שלשי', 'חיסון רביעי'],
      datasets: [
        {
          label: 'תרשים חיסונים',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: data,
        },
      ],
    };
  
    return (
      <div>
        <Line data={chartData} />
      </div>
    );
  }
  
  export default function ChartsPage1() {
    const [data, setData] = useState([0, 0, 0, 0]);
  
    useEffect(() => {
      async function fetchData() {
        const newData = [];
        for (let i = 1; i <= 4; i++) {
          const count = await getCountWhoVaccinated(i);
          newData.push(count);
        }
        setData(newData);
      }
      fetchData();
    }, []);
  
    return <MDBCard style={{opacity:"0.7", margin:"0 auto"}} className="col-8"><Chart data={data} /></MDBCard>;
  }