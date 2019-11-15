import { StyleSheet, Dimensions } from "react-native";
import standardButton from '../componentStyles/standardButton';
import standardButtonText from '../componentStyles/standardButtonText';
import modifiedUppergroundView from '../componentStyles/modifiedUppergroundView';
import modifiedImage from '../componentStyles/modifiedImage';
import modifiedUnderBackGround from '../componentStyles/modifiedUnderBackGround';

export default StyleSheet.create({
    viewBackground: modifiedUppergroundView,
    Image: modifiedImage,
    underBackGround: modifiedUnderBackGround,
    TouchableOpacity: standardButton,
    buttonText: standardButtonText
});