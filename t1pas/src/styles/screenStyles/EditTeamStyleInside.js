import { StyleSheet } from "react-native";
import TeamsUpperBackgroundView from '../componentStyles/TeamsUpperBackgroundView';
import viewNames from '../componentStyles/viewNames';
import viewButtons from '../componentStyles/viewButtons';
import modifiedButton from '../componentStyles/modifiedButton';
import modifiedButtonText from '../componentStyles/modifiedButtonText';
import colorGreen from '../componentStyles/colorGreen';
import modifiedButtonModifiedHeight from '../componentStyles/modifiedButtonModifiedHeight';
import standardTable from '../componentStyles/standardTable';
import colorBlueLight from '../componentStyles/colorBlueLight';
import colorBlueDark from '../componentStyles/colorBlueDark';
import standardUndergroundView from '../componentStyles/standardUndergroundView';

export default StyleSheet.create({
    viewBackground: TeamsUpperBackgroundView,
    viewNames: viewNames,
    viewConfigButtons: viewButtons,
    TouchableOpacity: modifiedButton,
    buttonText: modifiedButtonText,
    TouchableOpacityAdd: colorGreen,
    TouchableOpacityNames: modifiedButtonModifiedHeight,
    item: standardTable,
    itemColor1: colorBlueDark,
    itemColor2: colorBlueLight,
    container: standardUndergroundView
});