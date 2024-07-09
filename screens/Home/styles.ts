import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  margin: 14px 4px;
`;

export const FormContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InputTask = styled.TextInput`
    border-radius: 8px;
    background: #121212;
    padding: 18px;
    color: #FFFF;
    width: 80%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background: #53C654;
    border-radius: 8px;
    padding: 18px;
`;

export const ButtonSubmitText = styled.Text`
    color: #121212;
    font-size: 20px;
    font-weight: bold;
`;

export const TaskTitle = styled.Text`
    text-align: center;
    font-size: 22px;
    color: #FFFF;
    margin: 32px 0;
`

export const TaskContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    background: #121212;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
`;

export const TaskDeleteButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 8px;
    background: #D61A1F;
`;
