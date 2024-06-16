import React from 'react';
import  {Line, Bar, Chart } from 'react-chartjs-2';
import Navbar from '../components/Navbar';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,

    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Admin = () => {
    const students = [
        { id: 1, name: 'Abebe', grade: 85 },
        { id: 2, name: 'kebede', grade: 92 },
        { id: 3, name: 'Bab', grade: 78 },
        { id: 4, name: 'eyu', grade: 90 },
        { id: 5, name: 'Ashu', grade: 90 }
      ];
    
  
    // Prepare data for the charts
    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Attendance',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
  
      const barChartData = {
        labels: students.map((student) => student.name),
        datasets: [
          {
            label: 'Grade',
            data: students.map((student) => student.grade),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1
          }
        ]
      };

    //   const pieChartData = {
    //     labels: ['Red', 'Blue', 'Yellow'],
    //     datasets: [
    //       {
    //         data: [300, 50, 100],
    //         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    //       }
    //     ]
    //   };
    
  
      return (
        <>

        
        <Navbar />
        <div className="p-8">
        
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Student List</h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b">
                        <td className="px-4 py-2">{student.name}</td>
                        <td className="px-4 py-2">{student.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mx-[20px]'>
              <h2 className="text-2xl font-bold mb-2">Attendance Chart</h2>
              <Line data={lineChartData} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Grade Chart</h2>
              <Bar data={barChartData} />
            </div>
            {/* <div>
                <h2 className="text-2xl font-bold mb-2">Grades by Subject</h2>
                <Pie data={pieChartData} />
            </div> */}
          </div>
        </div>
        </>
      );
    };
export default Admin


