import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, fontSize, spacing, touchTarget } from '../theme';

type Props = {
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
  selected?: boolean;
  disabled?: boolean; // the screen shows the reason in text next to the button
};

// A large button (at least 48×48 dp). A selected button shows a check mark in text, not only a colour.
export default function BigButton({
  label,
  accessibilityLabel,
  onPress,
  selected = false,
  disabled = false,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ selected, disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        selected && styles.selected,
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, selected && styles.selectedLabel, disabled && styles.disabledLabel]}>
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
  disabled: {
    borderColor: colors.border,
    borderStyle: 'dashed',
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
  disabledLabel: {
    color: colors.border,
  },
});
