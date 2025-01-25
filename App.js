import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Pressable, TextComponent, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskList from './TaskList'

export default function App() {

  const [task, setTask] = useState({
    title: "",
    priority: "high",
  });

  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    setTasks([task, ...tasks]);
    setTask({ title: "", priority: "high" });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>TASK LIST</Text>
      <TextInput
        placeholder='Enter task title'
        value={task.title}
        onChangeText={text => setTask({ ...task, title: text })}
        style={styles.textInput}
      />
      <View style={styles.dropdown}>
        <Picker
          selectedValue={task.priority}
          onValueChange={(itemValue) =>
            setTask({ ...task, priority: itemValue })
          }
          mode='dropdown'
          enabled={true}
        >
          <Picker.Item label="Low" value="low" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="High" value="high" />
        </Picker>
      </View>
      <Pressable style={styles.button} onPress={handleAdd}>
          <Text style={styles.pressText}>ADD TASK</Text>
      </Pressable>

      <TaskList tasks={tasks} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  button: {
    width: '70%',
    borderRadius: 5,
    backgroundColor: '#AEB8FE',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  dropdown: {
    marginVertical: 10,
    width: '40%',
    height: 50,
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: '200',
  }, 
  pressText: {
    color: 'white',
    fontSize: 16
  },
  textInput: {
    fontSize: 18,
  },
});
