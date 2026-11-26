import { StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import DayHeading from '../components/DayHeading';
import ShiftCard from '../components/ShiftCard';
import { TODAY } from '../data/demo';
import { formatDay } from '../logic/dates';
import { LABELS, SHIFT_TYPE_LABELS } from '../logic/labels';
import { groupByDay, shiftsOfUser, shiftsOfWeek } from '../logic/shifts';
import { colors, fontSize, spacing } from '../theme';
import { DemoUser, Shift } from '../types';

type Props = {
  shifts: Shift[];
  currentUser: DemoUser;
  onOfferSwap: (shiftId: string) => void;
};

export default function MyShiftsScreen({ shifts, currentUser, onOfferSwap }: Props) {
  const days = groupByDay(shiftsOfUser(shiftsOfWeek(shifts, TODAY), currentUser.id));

  return (
    <View style={styles.screen}>
      <Text accessibilityRole="header" style={styles.title}>
        My shifts
      </Text>

      {/* UI-15 → R12 */}
      {days.length === 0 && <Text style={styles.text}>{LABELS.noShifts}</Text>}
      {days.map((day) => (
        <View key={day.date} style={styles.day}>
          <DayHeading date={day.date} />
          {day.shifts.map((shift) => (
            <ShiftCard key={shift.id} shift={shift} currentUser={currentUser}>
              {/* UI-10 → R8 */}
              {shift.swapOfferedBy !== currentUser.id && (
                <View style={styles.actions}>
                  <BigButton
                    label={LABELS.offerSwap}
                    accessibilityLabel={`${LABELS.offerSwap}: ${SHIFT_TYPE_LABELS[shift.type]} on ${formatDay(shift.date)}`}
                    onPress={() => onOfferSwap(shift.id)}
                  />
                </View>
              )}
            </ShiftCard>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: spacing.large,
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    color: colors.text,
  },
  day: {
    gap: spacing.small,
  },
  actions: {
    marginTop: spacing.small,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: fontSize.body,
    color: colors.text,
  },
});
