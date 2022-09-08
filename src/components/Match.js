/* import { Context } from './TabBox';
import { useContext } from 'react'; */
/* import Flag8Star from './Flag8Star' */
import './styles/Match.css'

function Match ({match, setScore}) {
/*   const homeTeamLogo = teams.filter(team => team.name === match.home.name)[0].logo;
  const awayTeamLogo = teams.filter(team => team.name === match.away.name)[0].logo; */

  return (
    <div className='matches-inline'>
      <div className="info-date-stadium">
        <p>{match.details}</p>
      </div>
      <div className="match-score">
        <div className="label-home">
          <label
            htmlFor={`match_${match.match}-${match.home.name.toLowerCase()}`}>
            {match.home.name}
          </label>
        </div>
        <div className="input-score">
          <input
            id={`match_${match.match}-${match.home.name.toLowerCase()}`}
            type="tel"
            maxLength="2"
            defaultValue={match.home.goals === null ? '' : match.home.goals}
            onChange={(e) => setScore(match.match, match.home.name, e.target.value, true)} />
          <p>-</p>
          <input
            id={`match_${match.match}-${match.away.name.toLowerCase()}`}
            type="tel"
            maxLength="2"
            defaultValue={match.away.goals === null ? '' : match.away.goals}
            onChange={(e) => setScore(match.match, match.away.name, e.target.value, false)} />
        </div>
        <div className="label-away">
          <label htmlFor={`match_${match.match}-${match.away.name.toLowerCase()}`}>
            {match.away.name}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Match;
