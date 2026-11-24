import { StyleSheet, Text, View } from 'react-native';
import { DEMO_USERS, PERSONA_TITLES } from '../data/demo';
import { DemoUser } from '../types';
import { colors, fontSize, spacing } from '../theme';
import BigButton from './BigButton';

type Props = {
  currentUser: DemoUser;
  onChange: (user: DemoUser) => void;
};

// Demo role switch: replaces a login in this prototype
export default function RoleSwitcher({ currentUser, onChange }: Props) {
  return (
    <View style={styles.banner}>
      <Text style={styles.heading}>Demo mode: choose who you are</Text>
      <View style={styles.buttons}>
        {DEMO_USERS.map((user) => (
          <BigButton
            key={user.id}
            label={user.personaId}
            accessibilityLabel={`Use the app as ${user.personaId}, ${user.name}, ${PERSONA_TITLES[user.personaId]}`}
            selected={user.id === currentUser.id}
            onPress={() => onChange(user)}
          />
        ))}
      </View>
      <Text style={styles.text}>
        You are {currentUser.name} ({currentUser.personaId}, {PERSONA_TITLES[currentUser.personaId]})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    gap: spacing.small,
    padding: spacing.medium,
    backgroundColor: colors.demoBanner,
  },
  heading: {
    fontSize: fontSize.body,
    fontWeight: 'bold',
    color: colors.text,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.small,
  },
  text: {
    fontSize: fontSize.body,
    color: colors.text,
  },
});
