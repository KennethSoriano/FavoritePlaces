import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

function Map() {
    const region = {
        latitude: 34,
        longitude: -134,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04 
    };

    return (
        <MapView style={styles} initialRegion={region} ></MapView>
    )
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});