import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PanelRound16, PanelQuarterFinals, PanelSemifinals, PanelFinal } from './PanelKOStage';
import './styles/react-tabs.css';
import './styles/TabKOStage.css';

function TabKOStage ({enableScoreboard, defineChampion, champion}) {
	return (
		<Tabs>
			<TabList className='tablist'>
				<Tab className='react-tabs__tab tabFS'>Round of 16</Tab>
				<Tab className='react-tabs__tab tabFS'>Quarterfinals</Tab>
				<Tab className='react-tabs__tab tabFS'>Semifinals</Tab>
				<Tab className='react-tabs__tab tabFS'>Final</Tab>
			</TabList>
			<TabPanel className='panelOF'><PanelRound16 enableScoreboard={enableScoreboard}/></TabPanel>
			<TabPanel className='panelCF'><PanelQuarterFinals /></TabPanel>
			<TabPanel className='panelSF'><PanelSemifinals /></TabPanel>
			<TabPanel className='panelF'><PanelFinal defineChampion={defineChampion} champion={champion}/></TabPanel>
		</Tabs>
	);
}

export default TabKOStage;
