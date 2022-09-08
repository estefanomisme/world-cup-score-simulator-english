import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './styles/react-tabs.css';
import './styles/ScoreBoard.css';
import './styles/SuperResponsiveTableStyle.css';
import Flag8Star from './Flag8Star';

function ScoreBoard({teams}) {
  return (
    <div className="centered-table">
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th className="item-nameteam">Team</Th>
            <Th className="item-scoreboard">Pts</Th>
            <Th className="item-scoreboard">MP</Th>
            <Th className="item-scoreboard">W</Th>
            <Th className="item-scoreboard">D</Th>
            <Th className="item-scoreboard">L</Th>
            <Th className="item-scoreboard">GF</Th>
            <Th className="item-scoreboard">GA</Th>
            <Th className="item-scoreboard">GD</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teams.map((team, index) => (
            <Tr key={index} className={team.qualified !== 'groupStage' ? 'qualified': ''}>
              <Td className="item-flag">
                <Flag8Star className="item-original-flag" nameTeam={team.name} flagTeam={`./images/${team.logo}`}/> 
              </Td>
              <Td className="item-nameteam">
                <div className="flag-inline td-after">
                  <div className="flag-container">
                    <Flag8Star className="item-responsive-flag" nameTeam={team.name} flagTeam={`./images/${team.logo}`}/>
                  </div>
                  <p className="nameteam">{team.name}</p>
                </div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.score}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.matches}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.wins}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.draws}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.losses}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.goalsFor}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.goalsAgainst}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.goalsFor - team.goalsAgainst}</div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>

  );
}

export default ScoreBoard;
