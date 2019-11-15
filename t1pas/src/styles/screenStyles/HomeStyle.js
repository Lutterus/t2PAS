import { StyleSheet } from "react-native";
import standardButton from '../componentStyles/standardButton';
import standardButtonText from '../componentStyles/standardButtonText';
import standardTextInput from '../componentStyles/standardTextInput';
import standardUpperBackgroundView from '../componentStyles/standardUpperBackgroundView';
import standardImage from '../componentStyles/standardImage';
import standardMiddlegroundView from '../componentStyles/standardMiddlegroundView';
import standardUndergroundView from '../componentStyles/standardUndergroundView';

export default StyleSheet.create({
    viewBackground: standardUpperBackgroundView,
    Image: standardImage,
    middleBackGround: standardMiddlegroundView,
    textField: standardTextInput,
    underBackGround: standardUndergroundView,
    TouchableOpacity: standardButton,
    buttonText: standardButtonText
});
