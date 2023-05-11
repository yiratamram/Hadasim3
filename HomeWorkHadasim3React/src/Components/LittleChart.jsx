// import React, { useEffect } from "react";
// import { Line } from 'react-chartjs-2';
// import { useState, useEffect } from 'react';
// import { getCountWhoVaccinated } from './api';

// async function fetchData() {
//   const data = [];
//   for (let i = 1; i <= 4; i++) {
//     const count = await getCountWhoVaccinated(i);
//     data.push(count);
//   }
//   setData(data);
// }
// function Chart({ data }) {
//   const chartData = {
//     labels: ['חיסון רביעי', 'חיסון שלישי', 'חיסון שני', 'חיסון ראשון'],
//     datasets: [
//       {
//         label: 'תרשים חיסונים',
//         backgroundColor: 'rgba(255,99,132,0.2)',
//         borderColor: 'rgba(255,99,132,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//         hoverBorderColor: 'rgba(255,99,132,1)',
//         data: data,
//       },
//     ],
//   };

//   return (
//     <div>
//       <Line data={chartData} />
//     </div>
//   );
// }

// export default function ChartsPage1() {
//   const [data, setData] = useState([0, 0, 0, 0]);

//   useEffect(() => {
//     async function fetchData() {
//       const newData = [];
//       for (let i = 1; i <= 4; i++) {
//         const count = await getCountWhoVaccinated(i);
//         newData.push(count);
//       }
//       setData(newData);
//     }
//     fetchData();
//   }, []);

//   return <Chart data={data} />;
// }