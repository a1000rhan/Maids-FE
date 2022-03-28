import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  ScrollView,
  useToast,
  VStack,
} from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

import COLORS from "./color";
import { observer } from "mobx-react";

import data from "../../data";

const NameSignUpMaid = ({ navigation }) => {
  const toast = useToast();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    civilId: "",
    nationality: "",
    languages: [],
    skills: [],
    address: "",
  });

  //............Language....................
  const [language, setLanguage] = useState();
  const [newLanguage, setNewLanguage] = useState([]);

  const handelLanguageChange = (event) => {
    setLanguage(event);
  };

  //...Add Languages...
  const addLanguage = () => {
    setNewLanguage([...newLanguage, language]);
    setLanguage("");
  };

  const handleRemove = (event, index) => {
    const temp = newLanguage.filter((lang) => lang.index !== index);
  };

  const languagesList = newLanguage.map((lang, index) => (
    <Chip key={index} style={styles.chip} onPress={handleRemove}>
      <Text style={styles.chipText}>{lang}</Text>
    </Chip>
  ));

  //...........Skills..............

  const [skills, setSkills] = useState();
  const [newSkills, setNewSkills] = useState([]);

  const handelChangeSkill = (event) => {
    setSkills(event);
  };

  const addNewSkill = () => {
    setNewSkills([...newSkills, skills]);
    setSkills("");
  };

  const SkillsList = newSkills.map((skill, index) => (
    <Chip key={index} style={styles.chip}>
      <Text style={styles.chipText}>{skill}</Text>
    </Chip>
  ));

  //.............Submit...................
  const handleSubmit = () => {
    let user2 = {
      ...user,
      languages: [...newLanguage],
      skills: [...newSkills],
    };
    setUser(user2);
    navigation.navigate("SkillsSignUpMaid", {
      user: user2,
    });
  };

  return (
    <ScrollView>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign up to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>First Name</FormControl.Label>
              <Input
                onChangeText={(value) => setUser({ ...user, firstName: value })}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Last Name</FormControl.Label>
              <Input
                type="text"
                onChangeText={(value) => setUser({ ...user, lastName: value })}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Nationality</FormControl.Label>
              <Input
                type="text"
                onChangeText={(value) =>
                  setUser({ ...user, nationality: value })
                }
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Civil Id</FormControl.Label>
              <Input
                type="text"
                onChangeText={(value) => setUser({ ...user, civilId: value })}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Languages</FormControl.Label>
              <Input
                type="text"
                value={language}
                onChangeText={handelLanguageChange}
              />
              <View style={styles.icon}>
                <Icon.Button
                  onPress={addLanguage}
                  backgroundColor={COLORS.main}
                  size={30}
                  name="add"
                />
              </View>
              <View style={styles.checkboxContainer}>{languagesList}</View>
            </FormControl>
            <FormControl>
              <FormControl.Label>Skills</FormControl.Label>
              <Input
                type="text"
                value={skills}
                onChangeText={handelChangeSkill}
              />
              <View style={styles.icon}>
                <Icon.Button
                  onPress={addNewSkill}
                  backgroundColor={COLORS.main}
                  size={30}
                  name="add"
                />
              </View>
              <View style={styles.checkboxContainer}>{SkillsList}</View>
            </FormControl>

            <Button style={styles.btn} onPress={handleSubmit}>
              Next
            </Button>
            <HStack mt="6" justifyContent="center"></HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default observer(NameSignUpMaid);

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.main,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    flexWrap: "wrap",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  chip: {
    backgroundColor: "#6867AC",
    marginBottom: 5,
    marginRight: 5,
  },
  chipText: { color: "white", fontWeight: "bold" },
  icon: { width: 50, alignSelf: "flex-end" },
});
