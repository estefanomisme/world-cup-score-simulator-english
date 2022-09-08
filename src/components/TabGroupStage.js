import { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles/react-tabs.css';
import './styles/TabGroupStage.css';
import ScoreBoard from './ScoreBoard';
import MatchBoard from './MatchBoard';
import { Context } from './TabBox';

function TabGroupStage() {

	const [teams, , matches, , , ] = useContext(Context);
	const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

	return (
		<Tabs>
			<TabList className='tablist'>
				{groups.map((group) => (
					<Tab key={group} className='react-tabs__tab tabGS'>Group {group}</Tab>
				))}
			</TabList>

			{groups.map((group) => (
				<TabPanel key={`group-${group}`} className={`react-tabs__tab-panel panel-group-${group}`}>
				  <ScoreBoard
						teams={teams.filter(team => team.group === group)} />
					<MatchBoard
						teamsGroup={teams.filter(team => team.group === group)}
						matchesGroup={matches.filter(match => match.group === group)} />
				</TabPanel>
			))}

		</Tabs>
	);
}

export default TabGroupStage;
