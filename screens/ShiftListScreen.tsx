import { StyleSheet, Text } from 'react-native';
import { colors, fontSize } from '../theme';

// Placeholder: content comes from docs/decision-table.md in Phase 3
export default function ShiftListScreen() {
  return (
    <Text accessibilityRole="header" style={styles.title}>
      Shift list
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    color: colors.text,
  },
});
