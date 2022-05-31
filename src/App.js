import './App.css';
import { Typography, Divider } from 'antd';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import { strings } from './i18n/localizedStrings'

const { Title } = Typography;
function App() {
  return (
    <div style={{
      width: 500,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgb(241 239 239)',
      padding: 20,
      boxShadow: '0 0 10 px 4px #ccc',
      borderRadius: 5,
      height: '100vh',
    }}>
      <Title style={{ textAlign: 'center'}}>{strings.screen.title}</Title>
      <Filters/>
      <TodoList/>
    </div>
  );
}

export default App;
