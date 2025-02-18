import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "@/components/Themed";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import AppButton from "../../components/AppButton";
import { Link, useRouter } from "expo-router";
import DriversLicenseLogo from "@/components/DriversLicenseLogo";
import InsuranceLogo from "@/components/InsuranceLogo";

const BasicInfo = () => {
  const router = useRouter();

  const openCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      let result = await ImagePicker.launchCameraAsync();
      console.log(result);
    } else {
      console.log("Camera permission not granted");
    }
  };

  const openFilePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync();
      console.log(result);
    } else {
      console.log("File picker permission not granted");
    }
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Information</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Driver's License</Text>
          <DriversLicenseLogo style={styles.logoL} />
          <View style={styles.buttonGroup}>
            <View style={styles.camera}>
              <AppButton
                onPress={openCamera}
                backgroundColor="transparent"
                widthPercentage={45}
                borderStyle="dashed"
                borderRadius={5}
                borderColor="black"
                borderWidth={1}
              >
                <FontAwesome name={"camera"} size={15} />
                <Text style={styles.buttonText}>&nbsp;Open Camera</Text>
              </AppButton>
            </View>
            <AppButton
              onPress={openFilePicker}
              backgroundColor="transparent"
              widthPercentage={45}
              borderStyle="dashed"
              borderRadius={5}
              borderColor="black"
              borderWidth={1}
            >
              <FontAwesome name={"upload"} size={15} />
              <Text style={styles.buttonText}>&nbsp;Upload File</Text>
            </AppButton>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Insurance</Text>
          <InsuranceLogo style={styles.logoI} />
          <View style={styles.buttonGroup}>
            <AppButton
              onPress={openFilePicker}
              backgroundColor="transparent"
              widthPercentage={45}
              borderStyle="dashed"
              borderRadius={5}
              borderColor="black"
              borderWidth={1}
            >
              <FontAwesome name={"upload"} size={15} />
              <Text style={styles.buttonText}>&nbsp; Upload File</Text>
            </AppButton>
          </View>
        </View>
        <View style={styles.nextButtonContainer}>
          <AppButton
            borderRadius={20}
            widthPercentage={85}
            paddingVertical={10}
            onPress={() => router.push("../(tabs)/Account")}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </AppButton>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  titleContainer: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(30),
    marginLeft: horizontalScale(25),
    backgroundColor: "transparent",
    textAlign: "left",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
  },
  itemContainer: {
    alignItems: "center",
    width: horizontalScale(300),
    marginBottom: verticalScale(30),
    backgroundColor: "transparent",
  },
  label: {
    fontSize: moderateScale(22),
    fontFamily: "karlaM",
    borderBottomWidth: 1,
    marginTop: verticalScale(5),
    marginBottom: -verticalScale(10),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  logoL: {
    marginBottom: verticalScale(0),
  },
  logoI: {
    marginVertical: verticalScale(40),
  },

  buttonGroup: {
    backgroundColor: "transparent",
    alignItems: "center",
  },

  buttonText: {
    fontSize: moderateScale(18),
    fontFamily: "karlaR",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  camera: {
    marginBottom: verticalScale(12),
    backgroundColor: "transparent",
  },
  nextButtonContainer: {
    marginTop: verticalScale(12),
  },
  nextButtonText: {
    fontSize: moderateScale(22),
    fontFamily: "karlaR",
  },
});

export default BasicInfo;
