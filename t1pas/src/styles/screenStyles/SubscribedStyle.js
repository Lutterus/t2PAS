import { StyleSheet } from "react-native";
import modifiedUppergroundView from '../componentStyles/modifiedUppergroundView';
import modifiedImage from '../componentStyles/modifiedImage';
import modifiedButton from '../componentStyles/modifiedButton';
import standardButtonText from '../componentStyles/standardButtonText';
import standardUndergroundView from '../componentStyles/standardUndergroundView';
import colorGreen from '../componentStyles/colorGreen';
import colorRed from '../componentStyles/colorRed';

export default StyleSheet.create({
    viewBackground: modifiedUppergroundView,
    Image: modifiedImage,
    underBackGround: standardUndergroundView,
    TouchableOpacity: modifiedButton,
    buttonText: standardButtonText,
    TouchableOpacityTeamColor: colorGreen,
    TouchableOpacityUnsSubColor:colorRed
});