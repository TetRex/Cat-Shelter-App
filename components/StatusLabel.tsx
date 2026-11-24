import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSize, spacing } from '../theme';

type Props = {
  text: string; // always shown: a status is never colour alone
  color?: string; // optional colour added on top of the text
};

export default function StatusLabel({ text, color }: Props) {
  return (
    <View style={[styles.label, color !== undefined && { borderColor: color }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.small,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 8,
  },
  text: {
    fontSize: fontSize.body,
    color: colors.text,
  },
});
