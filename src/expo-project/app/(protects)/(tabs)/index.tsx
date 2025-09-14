import { AuthContext } from '@/utils/authContext';
import React, { useContext } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const authContext = useContext(AuthContext);
  const handlePress = (e: number) => {
    Alert.alert(`Button ${e} Hello`);
  };

  return (
    <View style={styles.container}>
      {/* Top Left Text */}
      <Text style={styles.topLeftText}>住屋地址</Text>

      {/* Banner Section */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>歡迎使用門禁系統</Text>
      </View>

      {/* Buttons Section */}
      <TouchableOpacity style={styles.button} onPress={() => handlePress(1)}>
        <Text style={styles.buttonText}>即時開啟正門</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress(2)}>
        <Text style={styles.buttonText}>正門監控鏡頭</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.successBtn]} onPress={() => handlePress(3)}>
        <Text style={styles.buttonText}>正門 - 正關閉</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.removeBtn]} onPress={authContext.logOut}>
        <Text style={styles.buttonText}>移除裝置</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center', // Center horizontally
    backgroundColor: "#03284fff",
    paddingTop: 60, // Adjust padding to move everything down by 10
    gap:"4%"
  },
  topLeftText: {
    position: 'absolute',
    top: 20, // Adjusted position from the top
    left: 20, // Position from the left
    fontSize: 16,
    color: '#ffffff', // Change to a visible color (white)
  },
  banner: {
    width: "100%",
    backgroundColor: "#f8c74a", // Banner background color
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Space between banner and buttons
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    width: "70%",
    height: "10%", // Set a fixed height for better centering
    backgroundColor: '#007bff',
    paddingVertical: "1%",
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 0, // Add space between buttons
    justifyContent: 'center', // Center vertically
  },
  successBtn: {
    backgroundColor: "#399427ff",
  },
  removeBtn: {
    backgroundColor: "#ad0e0eff",
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 50, // Match lineHeight to button height for vertical centering
  },
});