import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './styles/SuperResponsiveTableStyle.css';

export default function FinalScoreboard ({teams, enabled, champion}) {
  return (
    <details style={{display: enabled? 'initial': 'none'}}>
      <summary>Final Scoreboard</summary>
      <p>champion: {champion? champion: 'Not defined yet'}</p>
      <div className='centered-table'>
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th className="item-scoreboard">Team</Th>
              <Th className="item-scoreboard">Pts</Th>
              <Th className="item-scoreboard">MP</Th>
              <Th className="item-scoreboard">W</Th>
              <Th className="item-scoreboard">D</Th>
              <Th className="item-scoreboard">L</Th>
              <Th className="item-scoreboard">GF</Th>
              <Th className="item-scoreboard">GA</Th>
              <Th className="item-scoreboard">GD</Th>
              <Th className="item-scoreboard">%Effct</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teams.map((team, index) => (
              <Tr key={index}>
                <Td>
                  <img
                    src={require(`./images/${team.logo}`)}
                    alt={team.name}
                    className="flag" />
                </Td>
                <Td className="item-nameteam">{team.name}</Td>
                <Td className="item-scoreboard">{team.score}</Td>
                <Td className="item-scoreboard">{team.matches}</Td>
                <Td className="item-scoreboard">{team.wins}</Td>
                <Td className="item-scoreboard">{team.draws}</Td>
                <Td className="item-scoreboard">{team.losses}</Td>
                <Td className="item-scoreboard">{team.goalsFor}</Td>
                <Td className="item-scoreboard">{team.goalsAgainst}</Td>
                <Td className="item-scoreboard">{team.goalsFor - team.goalsAgainst}</Td>
                <Td className="item-scoreboard">{(team.score * 100 / 21).toFixed(2)}%</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </details>
  )
}