import { StyleSheet, Text, useWindowDimensions } from 'react-native';
import { formatDay } from '../logic/dates';
import { colors, fontSize, largeTextScale } from '../theme';

// A day heading above that day's shifts, for example 'Tuesday 1 December'.
// At very large text sizes it uses the short form 'Tue 1 Dec' so no word is split (R13).
export default function DayHeading({ date }: { date: string }) {
  const { fontScale } = useWindowDimensions();
  return (
    <Text accessibilityRole="header" accessibilityLabel={formatDay(date)} style={styles.heading}>
      {formatDay(date, fontScale >= largeTextScale)}
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
