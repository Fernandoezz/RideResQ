import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface RoleOptionProps {
  title: string;
  icon: any;
  selected: boolean;
  onPress: () => void;
}

const RoleOption: React.FC<RoleOptionProps> = ({ title, icon, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected ? styles.selected : null]}
      onPress={onPress}
    >
      <View style={styles.checkbox}>
        {selected && <View style={styles.checked} />}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default RoleOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  selected: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 2,
    borderColor: '#fff',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 14,
    height: 14,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});
