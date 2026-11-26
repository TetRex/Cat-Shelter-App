import { StyleSheet, Text, View } from 'react-native';
import { CATS } from '../data/cats';
import { LABELS } from '../logic/labels';
import { colors, fontSize, spacing } from '../theme';

export default function CatsScreen() {
  return (
    <View style={styles.screen}>
      <Text accessibilityRole="header" style={styles.title}>
        Cats
      </Text>

      {/* UI-13 → R10 */}
      {CATS.map((cat) => (
        <View key={cat.id} style={styles.cat}>
          <Text accessibilityRole="header" style={styles.name}>
            {cat.name}
          </Text>
          {cat.notes.length === 0 && <Text style={styles.text}>{LABELS.noNotes}</Text>}
          {cat.notes.map((note) => (
            <Text key={note} style={styles.text}>
              {note}
            </Text>
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
  cat: {
    gap: spacing.small,
    padding: spacing.medium,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 8,
  },
  name: {
    fontSize: fontSize.heading,
    fontWeight: 'bold',
    color: colors.text,
  },
  text: {
    fontSize: fontSize.body,
    color: colors.text,
  },
});
