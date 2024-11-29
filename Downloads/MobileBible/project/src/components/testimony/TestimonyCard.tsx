import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio, Video } from 'expo-av';

interface TestimonyCardProps {
  testimony: {
    id: string;
    author: string;
    title: string;
    content: string;
    mediaType?: 'audio' | 'video' | 'text';
    mediaUrl?: string;
    likes: number;
    comments: number;
    category: string;
    timestamp: string;
  };
}

export default function TestimonyCard({ testimony }: TestimonyCardProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playbackObject, setPlaybackObject] = React.useState<Audio.Sound | null>(null);

  const handlePlayAudio = async () => {
    if (!testimony.mediaUrl) return;

    try {
      if (playbackObject === null) {
        const { sound } = await Audio.Sound.createAsync(
          { uri: testimony.mediaUrl },
          { shouldPlay: true }
        );
        setPlaybackObject(sound);
        setIsPlaying(true);
      } else {
        if (isPlaying) {
          await playbackObject.pauseAsync();
          setIsPlaying(false);
        } else {
          await playbackObject.playAsync();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.authorInfo}>
          <View style={styles.authorAvatar}>
            <Text style={styles.authorInitial}>{testimony.author[0]}</Text>
          </View>
          <View>
            <Text style={styles.authorName}>{testimony.author}</Text>
            <Text style={styles.timestamp}>{testimony.timestamp}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{testimony.category}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{testimony.title}</Text>

      {testimony.mediaType === 'text' && (
        <Text style={styles.content} numberOfLines={4}>
          {testimony.content}
        </Text>
      )}

      {testimony.mediaType === 'audio' && testimony.mediaUrl && (
        <TouchableOpacity 
          style={styles.audioPlayer}
          onPress={handlePlayAudio}
        >
          <Ionicons 
            name={isPlaying ? 'pause-circle' : 'play-circle'} 
            size={40} 
            color="#000"
          />
          <View style={styles.audioInfo}>
            <Text style={styles.audioTitle}>Enregistrement audio</Text>
            <View style={styles.audioProgress} />
          </View>
        </TouchableOpacity>
      )}

      {testimony.mediaType === 'video' && testimony.mediaUrl && (
        <Video
          source={{ uri: testimony.mediaUrl }}
          style={styles.video}
          useNativeControls
          resizeMode="cover"
        />
      )}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={24} color="#000" />
          <Text style={styles.actionText}>{testimony.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={22} color="#000" />
          <Text style={styles.actionText}>{testimony.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorInitial: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  categoryBadge: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  audioPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 12,
    gap: 12,
  },
  audioInfo: {
    flex: 1,
  },
  audioTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  audioProgress: {
    height: 3,
    backgroundColor: '#DDD',
    borderRadius: 2,
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
    gap: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    fontSize: 14,
    color: '#000',
  },
});