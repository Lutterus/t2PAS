import { StyleSheet } from "react-native";
import standardUndergroundView from '../componentStyles/standardUndergroundView';
import standardUpperBackgroundView from '../componentStyles/standardUpperBackgroundView';
import standardScrollView from '../componentStyles/standardScrollView';
import standardButtonEvaluate from '../componentStyles/standardButtonEvaluate';
import listAvaluateSpace from '../componentStyles/listAvaluateSpace';
import AvaluateButtonText from '../componentStyles/AvaluateButtonText';
import AvaluateView from '../componentStyles/AvaluateView'

export default StyleSheet.create({
    container: standardUndergroundView,
    viewBackground: standardUpperBackgroundView,
    ScrollView: standardScrollView,
    buttonEvaluate: standardButtonEvaluate,
    viewNameToRated: listAvaluateSpace,
    buttonEvaluateText: AvaluateButtonText,
    viewToRated: AvaluateView,

});
