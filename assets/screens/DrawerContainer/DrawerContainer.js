import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="ГЛАВНАЯ"
          source={require("../../images/icons/home.png")}
          onPress={() => {
            navigation.navigate("ГЛАВНАЯ");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="КАТАЛОГ"
          source={require("../../images/icons/category.png")}
          onPress={() => {
            navigation.navigate("КАТАЛОГ");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="КОНТАКТ"
          source={require("../../images/icons/search.png")}
          onPress={() => {
            navigation.navigate("КОНТАКТЫ");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="ЛИЧНЫЙ КАБИНЕТ"
          source={require("../../images/icons/search.png")}
          onPress={() => {
            navigation.navigate("ВЫХОД");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
