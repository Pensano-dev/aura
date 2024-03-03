import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const facilityWidth = (screenWidth - 48) / 3;

export const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "space-between",
    height: "90%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 10,
  },
  subheadingContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginRight: 20,
  },
  facilityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  facility: {
    width: facilityWidth,
    marginBottom: 15,
  },
});

