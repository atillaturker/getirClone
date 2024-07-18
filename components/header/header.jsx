import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerOne}>
        <Image
          style={styles.home}
          source={require("../../assets/images/home.png")}
        />
        <View style={styles.headerOneView}>
          <Text
            style={{
              fontSize: 23,
              color: "black",
              fontWeight: "600",
              paddingRight: 5,
            }}
          >
            Ev
          </Text>
          <Text style={{ color: "grey", fontWeight: "500" }}>
            Kadıköy Mahallesi Çimen Sok.
          </Text>
        </View>
        <Image
          style={{ width: 20, height: 20, paddingRight: 5 }}
          source={require("../../assets/images/right-arrow.png")}
        />
        <View style={styles.headerTwo}>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 10,
              fontWeight: "500",
              color: "purple",
            }}
          >
            TVS
          </Text>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 20,
              fontWeight: "800",
              color: "purple",
            }}
          >
            13DK
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "yellow",
    height: height * 0.065,
  },
  headerOne: {
    backgroundColor: "white",
    width: "75%",
    height: height * 0.065,
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
  },
  home: {
    width: 35,
    height: 35,
    margin: 5,
  },
  headerTwo: {
    width: "45%",
    height: height * 0.065,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default Header;
