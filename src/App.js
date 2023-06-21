// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Omkar Kanase",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Deepika Padukon",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Nora Fatie",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Messi Shinde",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "Harry Potter",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Aishwarya Rai",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "Rutik Pawar",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Priya Nalavde",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Kate Winslate",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Ron Wizle",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "John Wick",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "David McMohn",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 13,
      fullName: "Mohan Jadhav",
      designation: "AWS & System Managment",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 14,
      fullName: "Shubhangi Ganghi",
      designation: "Machine Learning",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 15,
      fullName: "Vinod Kamble",
      designation: "Data Analysis",
      gender: "male",
      teamName: "TeamC"
    }
  ]);
  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees));

  }, [employees]);

  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

  }, [selectedTeam]);

  function handelTeamSelectionChange(event) {
    setTeam(event.target.value);

  }
  function handelEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === selectedTeam)
        ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee);

    setEmployees(transformedEmployees)
  }
  return (
    <div>
      
      {/* <Router>

        <Nav />
        <Header selectedTeam={selectedTeam}
          teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}

        />
        <Routes>
          <Route path='/'
            element={<Employees employees={employees}
              selectedTeam={selectedTeam}
              handelEmployeeCardClick={handelEmployeeCardClick}
              handelTeamSelectionChange={handelTeamSelectionChange}
            />}
          >


          </Route>
          <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers />}>

          </Route>
          <Route path='*' element={<NotFound />}>

          </Route>
        </Routes>
        <Footer />
      </Router> */}
      <Router>
        <Nav />
        <Header selectedTeam={selectedTeam}
          teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
        <Routes>
          <Route path="/" element={<Employees employees={employees}
            selectedTeam={selectedTeam}
            handelEmployeeCardClick={handelEmployeeCardClick}
            handelTeamSelectionChange={handelTeamSelectionChange} />}>
          </Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />}>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
