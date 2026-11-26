import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BigButton from './components/BigButton';
import RoleSwitcher from './components/RoleSwitcher';
import { DEMO_USERS } from './data/demo';
import CatsScreen from './screens/CatsScreen';
import MyShiftsScreen from './screens/MyShiftsScreen';
import ShiftListScreen from './screens/ShiftListScreen';
import { colors, safeArea, spacing } from './theme';

type Screen = 'shiftList' | 'myShifts' | 'cats';

const SCREENS: { screen: Screen; label: string }[] = [
  { screen: 'shiftList', label: 'Shift list' },
  { screen: 'myShifts', label: 'My shifts' },
  { screen: 'cats', label: 'Cats' },
];

export default function App() {
  const [currentUser, setCurrentUser] = useState(DEMO_USERS[0]);
  const [screen, setScreen] = useState<Screen>('shiftList');

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* UI-1 → R15 */}
        <RoleSwitcher currentUser={currentUser} onChange={setCurrentUser} />

        {/* UI-2 → R1, R10, R12, R13 */}
        <View style={styles.menu}>
          {SCREENS.map((item) => (
            <BigButton
              key={item.screen}
              label={item.label}
              accessibilityLabel={`Show ${item.label}`}
              selected={item.screen === screen}
              onPress={() => setScreen(item.screen)}
            />
          ))}
        </View>

        <View style={styles.screen}>
          {screen === 'shiftList' && <ShiftListScreen />}
          {screen === 'myShifts' && <MyShiftsScreen />}
          {screen === 'cats' && <CatsScreen />}
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: safeArea.top,
    paddingBottom: safeArea.bottom,
  },
  content: {
    gap: spacing.medium,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.small,
    paddingHorizontal: spacing.medium,
  },
  screen: {
    paddingHorizontal: spacing.medium,
  },
});
