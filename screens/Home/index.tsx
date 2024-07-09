import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {
    ButtonSubmit, 
    ButtonSubmitText, 
    FormContainer, 
    HomeContainer, 
    InputTask,
    TaskContainer,
    TaskDeleteButton,
    TaskTitle
} from './styles';
import { useState } from 'react';
import React from 'react';
import { Todo } from '../../components/Todo';

interface Task {
    id: string;
    title: string;
    done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask() {
    const newTask: Task = {
        id: new Date().getTime().toString(),
        title: taskName,
        done: false,
    };
    console.log(newTask);
    setTasks(state => [...state, newTask]);
    setTaskName('')
  }

  function handleDeleteTask(taskID: string) {
    const taskFilter: Task[] = tasks.filter(task => task.id !== taskID);
    setTasks(taskFilter);
  }

  return (
    <HomeContainer>
        <FormContainer>
            <InputTask value={taskName} onChangeText={(text) => setTaskName(text)} />
            <ButtonSubmit onPress={handleCreateNewTask}>
                <ButtonSubmitText>+</ButtonSubmitText>
            </ButtonSubmit>
        </FormContainer>
        <View>
            {
                <>
                    <TaskTitle>Tarefas criadas</TaskTitle>
                    <FlatList
                        data={tasks}
                        keyExtractor={(task) => task.id}
                        renderItem={(task: Task) => {
                            <TaskContainer key={task.id}>
                                <Text style={{ color: "#FFFF"}}>{task.title}</Text>
                                <TaskDeleteButton onPress={() => handleDeleteTask(task.id)}>
                                    <Text style={{ color: "#FFFF"}}> - </Text>
                                </TaskDeleteButton>
                            </TaskContainer>
                        }}
                        ListEmptyComponent={() => (
                            <Text style={{ color: "#FFFF"}}>Nenhuma tarefa criada.</Text>
                        )}
                    />
                </>
            }
        </View>
    </HomeContainer>
  );
}
