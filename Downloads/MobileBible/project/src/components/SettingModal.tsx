import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  lineHeight: number;
  onLineHeightChange: (height: number) => void;
}

export default function SettingsModal({
  visible,
  onClose,
  fontSize,
  onFontSizeChange,
  lineHeight,
  onLineHeightChange,
}: SettingsModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Paramètres de lecture</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Taille du texte</Text>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>A</Text>
              <Slider
                style={styles.slider}
                minimumValue={12}
                maximumValue={24}
                step={1}
                value={fontSize}
                onValueChange={onFontSizeChange}
                minimumTrackTintColor="#2196F3"
                maximumTrackTintColor="#000000"
              />
              <Text style={[styles.sliderLabel, { fontSize: 24 }]}>A</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Espacement des lignes</Text>
            <View style={styles.sliderContainer}>
              <Ionicons name="remove" size={24} color="#666" />
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={2}
                step={0.1}
                value={lineHeight}
                onValueChange={onLineHeightChange}
                minimumTrackTintColor="#2196F3"
                maximumTrackTintColor="#000000"
              />
              <Ionicons name="add" size={24} color="#666" />
            </View>
          </View>

          <View style={styles.preview}>
            <Text style={styles.previewTitle}>Aperçu</Text>
            <Text style={[styles.previewText, { fontSize, lineHeight: fontSize * lineHeight }]}>
              Au commencement, Dieu créa les cieux et la terre.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  slider: {
    flex: 1,
    height: 40,
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  preview: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
  },
  previewTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  previewText: {
    color: '#000',
  },
});