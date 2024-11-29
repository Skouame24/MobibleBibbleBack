import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Audio } from 'expo-av';

const { width } = Dimensions.get('window');
const categories = ['Foi', 'Guérison', 'Conversion', 'Miracle'];

export default function AddTestimonyModal({ visible, onClose }) {
  const [mode, setMode] = useState('text');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Foi');
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;

    setIsRecording(false);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setRecording(null);
  };

  const handleSubmit = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="chevron-down" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Nouveau Témoignage</Text>
            <View style={{ width: 40 }} />
          </View>

          <View style={styles.modeSelector}>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'text' && styles.modeButtonActive]}
              onPress={() => setMode('text')}
            >
              <Ionicons 
                name="document-text-outline" 
                size={20} 
                color={mode === 'text' ? '#000' : '#666'} 
              />
              <Text style={[
                styles.modeButtonText, 
                mode === 'text' && styles.modeButtonTextActive
              ]}>
                Texte
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'voice' && styles.modeButtonActive]}
              onPress={() => setMode('voice')}
            >
              <Ionicons 
                name="mic-outline" 
                size={20} 
                color={mode === 'voice' ? '#000' : '#666'} 
              />
              <Text style={[
                styles.modeButtonText, 
                mode === 'voice' && styles.modeButtonTextActive
              ]}>
                Vocal
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {mode === 'text' ? (
              <View style={styles.formContainer}>
                <Text style={styles.label}>Titre</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Donnez un titre à votre témoignage"
                  placeholderTextColor="#666"
                  value={title}
                  onChangeText={setTitle}
                />
                
                <Text style={styles.label}>Catégorie</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                    style={styles.picker}
                  >
                    {categories.map((cat) => (
                      <Picker.Item 
                        key={cat} 
                        label={cat} 
                        value={cat}
                        color="#000"
                      />
                    ))}
                  </Picker>
                </View>

                <Text style={styles.label}>Votre témoignage</Text>
                <TextInput
                  style={styles.textArea}
                  placeholder="Partagez votre histoire..."
                  placeholderTextColor="#666"
                  value={content}
                  onChangeText={setContent}
                  multiline
                  textAlignVertical="top"
                  numberOfLines={8}
                />
              </View>
            ) : (
              <View style={styles.voiceContainer}>
                <TouchableOpacity
                  style={[styles.recordButton, isRecording && styles.recordingButton]}
                  onPress={isRecording ? stopRecording : startRecording}
                >
                  <Ionicons
                    name={isRecording ? 'stop-circle' : 'mic'}
                    size={50}
                    color="white"
                  />
                  <Text style={styles.recordButtonText}>
                    {isRecording ? 'Appuyez pour arrêter' : 'Appuyez pour enregistrer'}
                  </Text>
                </TouchableOpacity>
                {isRecording && (
                  <Text style={styles.recordingText}>Enregistrement en cours...</Text>
                )}
              </View>
            )}
          </ScrollView>

          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Publier</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  modeSelector: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 4,
    marginBottom: 25,
  },
  modeButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    gap: 8,
  },
  modeButtonActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  modeButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },
  modeButtonTextActive: {
    color: '#000',
  },
  content: {
    flex: 1,
  },
  formContainer: {
    gap: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#000',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  textArea: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#000',
    minHeight: 200,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  pickerContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  picker: {
    height: 50,
  },
  voiceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  recordButton: {
    backgroundColor: '#000',
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  recordingButton: {
    backgroundColor: '#666',
  },
  recordButtonText: {
    color: 'white',
    marginTop: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  recordingText: {
    marginTop: 20,
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#000',
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});