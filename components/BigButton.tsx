import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, fontSize, spacing, touchTarget } from '../theme';

type Props = {
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
  selected?: boolean;
};

// A large button (at least 48×48 dp). A selected button shows a check mark in text, not only a colour.
export default function BigButton({ label, accessibilityLabel, onPress, selected = false }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [styles.button, selected && styles.selected, pressed && styles.pressed]}
    >
      <Text style={[styles.label, selected && styles.selectedLabel]}>
        {selected ? `✓ ${label}` : label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: touchTarget,
    minWidth: touchTarget,
    justifyContent: 'center',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  selected: {
    backgroundColor: colors.primary,
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    fontSize: fontSize.body,
    color: colors.primary,
  },
  selectedLabel: {
    color: colors.onPrimary,
    fontWeight: 'bold',
  },
});
