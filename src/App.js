import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from './data.json';

const App = () => {
  const chartData = data.data.map((employee) => ({
    Name: employee.employee_name,
    Salary: employee.employee_salary,
  }));
  // chartData.sort((a,b)=>a.salary-b.salary);
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>User Data Salary Chart</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Salary" fill="rgba(75,192,192,0.6)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
