import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import BigButton from '../components/BigButton';
import DayHeading from '../components/DayHeading';
import ShiftCard from '../components/ShiftCard';
import { TODAY } from '../data/demo';
import { addDays, formatDay, weekdayName } from '../logic/dates';
import {
  LABELS,
  needPeopleSummary,
  SHIFT_TYPE_LABELS,
  signUpBlockLabel,
  statusLabel,
} from '../logic/labels';
import {
  getShiftStatus,
  getSignUpBlock,
  groupByDay,
  shiftsNeedingPeople,
  shiftsOfWeek,
} from '../logic/shifts';
import { colors, fontSize, largeTextScale, spacing } from '../theme';
import { DemoUser, Shift } from '../types';

// How many days after TODAY the coordinator summary looks ahead (R7)
const LOOK_AHEAD_DAYS = 2;

type Props = {
  shifts: Shift[];
  currentUser: DemoUser;
  onSignUp: (shiftId: string) => void;
  onTakeSwap: (shiftId: string) => void;
};

export default function ShiftListScreen({ shifts, currentUser, onSignUp, onTakeSwap }: Props) {
  const days = groupByDay(shiftsOfWeek(shifts, TODAY));

  return (
    <View style={styles.screen}>
      <Text accessibilityRole="header" style={styles.title}>
        Shift list
      </Text>

      {/* UI-9 → R7, R13 */}
      {currentUser.role === 'coordinator' && (
        <CoordinatorSummary shifts={shifts} currentUser={currentUser} />
      )}

      {/* UI-3 → R1, R13 */}
      {days.map((day) => (
        <View key={day.date} style={styles.day}>
          <DayHeading date={day.date} />
          {day.shifts.map((shift) => (
            <ShiftCard key={shift.id} shift={shift} currentUser={currentUser}>
              <ShiftActions
                shift={shift}
                currentUser={currentUser}
                onSignUp={onSignUp}
                onTakeSwap={onTakeSwap}
              />
            </ShiftCard>
          ))}
        </View>
      ))}
    </View>
  );
}

// R7: the shifts from TODAY to TODAY + 2 days that need people
function CoordinatorSummary({ shifts, currentUser }: { shifts: Shift[]; currentUser: DemoUser }) {
  const needing = shiftsNeedingPeople(shifts, TODAY, LOOK_AHEAD_DAYS);
  const shortDates = useWindowDimensions().fontScale >= largeTextScale; // R13
  const lastDay = weekdayName(addDays(TODAY, LOOK_AHEAD_DAYS), shortDates);

  return (
    <View style={styles.summary}>
      <Text style={styles.summaryTitle}>{needPeopleSummary(needing.length, lastDay)}</Text>
      {needing.map((shift) => (
        <Text key={shift.id} style={styles.text}>
          • {formatDay(shift.date, shortDates)}, {SHIFT_TYPE_LABELS[shift.type]} {shift.start}–{shift.end}:{' '}
          {statusLabel(
            getShiftStatus(shift, currentUser.id),
            shift.volunteerIds.length,
            shift.capacity,
          )}
        </Text>
      ))}
    </View>
  );
}

// R3, R4, R6, R9: what the current user can do with a shift they are not on
function ShiftActions({ shift, currentUser, onSignUp, onTakeSwap }: Omit<Props, 'shifts'> & { shift: Shift }) {
  if (shift.volunteerIds.includes(currentUser.id)) {
    return null; // the status already says "Your shift"
  }

  const block = getSignUpBlock(shift, currentUser);
  const typeLabel = SHIFT_TYPE_LABELS[shift.type];

  return (
    <View style={styles.actions}>
      {/* UI-6 → R3, R4 · UI-8 → R6 */}
      <BigButton
        label={LABELS.signUp}
        accessibilityLabel={`${LABELS.signUp} for ${typeLabel} on ${formatDay(shift.date)}`}
        disabled={block !== null}
        onPress={() => onSignUp(shift.id)}
      />
      {block !== null && <Text style={styles.reason}>{signUpBlockLabel(block)}</Text>}

      {/* UI-11 → R9 */}
      {shift.swapOfferedBy !== undefined && (
        <BigButton
          label={LABELS.takeShift}
          accessibilityLabel={`${LABELS.takeShift}: ${typeLabel} on ${formatDay(shift.date)}`}
          onPress={() => onTakeSwap(shift.id)}
        />
      )}
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
  summary: {
    gap: spacing.small,
    padding: spacing.medium,
    backgroundColor: colors.notice,
    borderRadius: 8,
  },
  summaryTitle: {
    fontSize: fontSize.heading,
    fontWeight: 'bold',
    color: colors.text,
  },
  day: {
    gap: spacing.small,
  },
  actions: {
    gap: spacing.small,
    marginTop: spacing.small,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: fontSize.body,
    color: colors.text,
  },
  reason: {
    fontSize: fontSize.body,
    color: colors.text,
    backgroundColor: colors.notice,
    padding: spacing.small,
  },
});
