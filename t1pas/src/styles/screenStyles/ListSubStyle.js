import { StyleSheet } from "react-native";
import TeamsUpperBackgroundView from '../componentStyles/TeamsUpperBackgroundView';
import viewNames from '../componentStyles/viewNames';
import modifiedButtonNames from '../componentStyles/modifiedButtonNames';
import standardTable from '../componentStyles/standardTable';
import colorBlueLight from '../componentStyles/colorBlueLight';
import colorBlueDark from '../componentStyles/colorBlueDark';
import standardUndergroundView from '../componentStyles/standardUndergroundView';
import viewNamesInfoTouchable from '../componentStyles/viewNamesInfoTouchable';
import hasTeam from '../componentStyles/hasTeam';
import listSubsSpace from '../componentStyles/listSubsSpace';
import listSubsviewTouchableOpacity from '../componentStyles/listSubsviewTouchableOpacity';

export default StyleSheet.create({
    viewBackground: TeamsUpperBackgroundView,
    viewNames: viewNames,
    TouchableOpacityNames: modifiedButtonNames,
    item: standardTable,
    itemColor1: colorBlueLight,
    itemColor2: colorBlueDark,
    container: standardUndergroundView,
    viewTouchableOpacity: listSubsviewTouchableOpacity,
    viewToNames: viewNamesInfoTouchable,
    viewToRated: listSubsSpace,
    hasTeam: hasTeam,
});