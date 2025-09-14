import React, { useState } from 'react';
import { Button, FlatList, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const generateNotices = (num) => {
  return Array.from({ length: num }, (_, index) => ({
    id: (index + 1).toString(),
    title: `通知 ${index + 1}`,
    date: `2025-09-${String(index % 30 + 1).padStart(2, '0')}`, // 模拟日期
  }));
};

const regularNotices = generateNotices(100); // 生成 100 个通知

export default function Notice() {
  const [modalVisible, setModalVisible] = useState(false);

  const renderNoticeItem = ({ item }) => (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.noticeContainer}>
      <Text style={styles.noticeTitle}>{item.title}</Text>
      <Text style={styles.noticeDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Left Text */}
      <Text style={styles.topLeftText}>住屋地址</Text>

      {/* Banner Section */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>大廈通告</Text>
      </View>

      {/* Regular Notices List */}
      <FlatList
        data={regularNotices}
        renderItem={renderNoticeItem}
        keyExtractor={(item) => item.id}
        style={styles.noticeList}
      />

      <Modal
        visible={modalVisible}
        animationType='slide'
        presentationStyle='pageSheet'
        onRequestClose={() => { setModalVisible(false); }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Title</Text>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.content}>
              This is notice content. This is notice content. This is notice content.
              This is notice content. This is notice content. This is notice content.
              This is notice content. This is notice content. This is notice content.
              This is notice content. This is notice content. This is notice content.
              This is notice content. This is notice content. This is notice content.
              This is notice content. This is notice content. This is notice content.
              This is notice content. This is notice content. This is notice content.
            </Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button title='Close' onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#03284fff",
    paddingTop: 60,
    gap: "4%",
  },
  topLeftText: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 16,
    color: '#ffffff',
  },
  banner: {
    width: "100%",
    backgroundColor: "#f8c74a",
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  noticeContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 0.5,
    borderRadius: 0,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noticeDate: {
    fontSize: 14,
    color: '#888',
  },
  noticeList: {
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // 标题居中
  },
  modalContent: {
    width: "100%",
    paddingVertical: 10, // 为内容添加上下内边距
  },
  content: {
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 24, // 增加行间距
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});