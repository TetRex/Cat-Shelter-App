import { StyleSheet, Text } from 'react-native';
import { formatDay } from '../logic/dates';
import { colors, fontSize } from '../theme';

// A day heading above that day's shifts, for example 'Tuesday 1 December'
export default function DayHeading({ date }: { date: string }) {
  return (
    <Text accessibilityRole="header" style={styles.heading}>
      {formatDay(date)}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: fontSize.heading,
    fontWeight: 'bold',
    color: colors.text,
  },
});
