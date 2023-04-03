import React, { useState } from 'react';
import Banner from './components/Banner/';
import Footer from './components/Footer';
import FormOrgano from './components/FormOrgano';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name:'Front-End',
      primaryColor:'#57C278',
      secondaryColor:'#D9F7E9'
    },
    {
      name:'Back-End',
      primaryColor:'#E06869',
      secondaryColor:'#FDE7E8'
    },
    {
      name:'UX e Desing',
      primaryColor:'#D86EBF',
      secondaryColor:'#FAE9F3'
    }
  ]

  const [members, setMembers] = useState([])

  const whenNewMemberAdded = (member) => {
    console.log(member)
    setMembers([...members, member])

  }
  return (
    <div className="App">
      <Banner/>   
      <FormOrgano teams={teams.map(team => team.name)} whenMemberRegistred = {member =>whenNewMemberAdded(member)}/>    
      {teams.map(team => <Team  
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        members={members.filter(member =>member.team === team.name)} />
        )}
      <Footer />
    </div>
  );
}

export default App
