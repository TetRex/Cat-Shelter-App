import { ReactNode, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LABELS, SHIFT_TYPE_LABELS, statusLabel } from '../logic/labels';
import { getCat, getClinic, getTask } from '../logic/lookup';
import { getShiftStatus, isTaskLocked, ShiftStatus } from '../logic/shifts';
import { colors, fontSize, spacing, touchTarget } from '../theme';
import { DemoUser, Shift } from '../types';
import StatusLabel from './StatusLabel';

type Props = {
  shift: Shift;
  currentUser: DemoUser;
  children?: ReactNode; // the actions for this shift, shown at the end of the details
};

const STATUS_COLORS: Record<ShiftStatus, string> = {
  yourShift: colors.statusYours,
  full: colors.statusFull,
  partlyFilled: colors.statusPartlyFilled,
  free: colors.statusFree,
};

export default function ShiftCard({ shift, currentUser, children }: Props) {
  const [open, setOpen] = useState(false);

  const typeLabel = SHIFT_TYPE_LABELS[shift.type];
  const status = getShiftStatus(shift, currentUser.id);
  const statusText = statusLabel(status, shift.volunteerIds.length, shift.capacity);
  const swapOffered = shift.swapOfferedBy !== undefined;
  const hint = open ? LABELS.hideDetails : LABELS.showDetails;

  return (
    <View style={styles.card}>
      {/* UI-5 → R1, R13 */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${typeLabel}, ${shift.start} to ${shift.end}, ${statusText}${
          swapOffered ? `, ${LABELS.swapOffered}` : ''
        }. ${hint}`}
        accessibilityState={{ expanded: open }}
        onPress={() => setOpen(!open)}
        style={({ pressed }) => [styles.header, pressed && styles.pressed]}
      >
        <Text style={styles.title}>{typeLabel}</Text>
        <Text style={styles.text}>
          {shift.start}–{shift.end}
        </Text>
        <View style={styles.labels}>
          {/* UI-4 → R2, R14 */}
          <StatusLabel text={statusText} color={STATUS_COLORS[status]} />
          {/* UI-11 → R8 */}
          {swapOffered && <StatusLabel text={LABELS.swapOffered} color={colors.statusSwap} />}
        </View>
        <Text style={styles.hint}>{hint}</Text>
      </Pressable>

      {open && (
        <View style={styles.details}>
          <Text accessibilityRole="header" style={styles.subheading}>
            {LABELS.tasks}
          </Text>
          {shift.taskIds.map((taskId) => {
            const task = getTask(taskId);
            return (
              <View key={taskId}>
                <Text style={styles.text}>• {task.title}</Text>
                {/* UI-7 → R5 */}
                {isTaskLocked(task, currentUser) && (
                  <Text style={styles.reason}>
                    {LABELS.locked} {LABELS.medicationLocked}
                  </Text>
                )}
              </View>
            );
          })}

          {/* UI-14 → R11 */}
          {shift.vetTrip !== undefined && <VetTripDetails vetTrip={shift.vetTrip} />}

          {/* UI-12 → R10 */}
          {shift.catIds.length > 0 && (
            <>
              <Text accessibilityRole="header" style={styles.subheading}>
                {LABELS.cats}
              </Text>
              {shift.catIds.map((catId) => {
                const cat = getCat(catId);
                return (
                  <View key={catId}>
                    <Text style={styles.bold}>{cat.name}</Text>
                    {cat.notes.map((note) => (
                      <Text key={note} style={styles.text}>
                        {note}
                      </Text>
                    ))}
                  </View>
                );
              })}
            </>
          )}

          {children}
        </View>
      )}
    </View>
  );
}

// R11: what the driver needs before leaving
function VetTripDetails({ vetTrip }: { vetTrip: NonNullable<Shift['vetTrip']> }) {
  const clinic = getClinic(vetTrip.clinicId);
  return (
    <View style={styles.vetTrip}>
      <Text style={styles.text}>
        <Text style={styles.bold}>{LABELS.cat}</Text> {getCat(vetTrip.catId).name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>{LABELS.carrier}</Text> {vetTrip.carrier}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>{LABELS.clinic}</Text> {clinic.name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>{LABELS.address}</Text> {clinic.address}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>{LABELS.phone}</Text> {clinic.phone}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  header: {
    minHeight: touchTarget,
    gap: spacing.small,
    padding: spacing.medium,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: fontSize.heading,
    fontWeight: 'bold',
    color: colors.text,
  },
  labels: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.small,
  },
  hint: {
    fontSize: fontSize.body,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  details: {
    gap: spacing.small,
    paddingHorizontal: spacing.medium,
    paddingBottom: spacing.medium,
  },
  subheading: {
    fontSize: fontSize.body,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.small,
  },
  vetTrip: {
    gap: spacing.small,
    marginTop: spacing.small,
    padding: spacing.small,
    borderWidth: 2,
    borderColor: colors.statusYours,
    borderRadius: 8,
  },
  text: {
    fontSize: fontSize.body,
    color: colors.text,
  },
  bold: {
    fontSize: fontSize.body,
    fontWeight: 'bold',
    color: colors.text,
  },
  reason: {
    fontSize: fontSize.body,
    color: colors.text,
    backgroundColor: colors.notice,
    padding: spacing.small,
  },
});
