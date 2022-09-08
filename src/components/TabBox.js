import { useState, createContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles/react-tabs.css';
import './styles/TabBox.css';
import listTeams from './teams';
import listMatches from './matches';
import TabGroupStage from './TabGroupStage.js';
import TabKOStage from './TabKOStage.js';
import FinalScoreboard from './FinalScoreboard.js';

export const Context = createContext();

function TabBox() {

	const [teams, setTeams] = useState(listTeams);
	const [matches, setMatches] = useState(listMatches);
	const [teamsFinalScore, setTeamsFinalScore] = useState(listTeams);
	const [finalScoreboardEnabled, setFinalScoreboardEnabled] = useState(false);
	const [champion, setChampion] = useState(null);

	function enableScoreboard () {
		setFinalScoreboardEnabled(true);
	}

	function defineChampion ( teamName ) {
		setChampion(teamName);
	}

	return (
		<Context.Provider value={[teams, setTeams, matches, setMatches, teamsFinalScore, setTeamsFinalScore]}>
			<Tabs className='react-tabs tabBox'>
				<TabList>
					<Tab className='react-tabs__tab tabMain'>Group Stage</Tab>
					<Tab className='react-tabs__tab tabMain'>Knockout Stage</Tab>
				</TabList>
				<TabPanel>
					<h2><TabGroupStage /></h2>
				</TabPanel>
				<TabPanel>
					<h2><TabKOStage enableScoreboard={enableScoreboard} defineChampion={defineChampion} champion={champion}/></h2>
				</TabPanel>
			</Tabs>
			<FinalScoreboard teams={teamsFinalScore} enabled={finalScoreboardEnabled} champion={champion}/>
		</Context.Provider>
	);
}

export default TabBox;
