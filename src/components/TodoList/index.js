import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/actions';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
import TodoSlice from '../Todo/TodoSlice';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium')

    const dispatch = useDispatch()
    const todoList = useSelector(todosRemainingSelector)
    // const searchText = useSelector(searchTextSelector)

    console.log(todoList)
    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    }
    const handlePriorityChange = (e) => {
        setPriority(e)
    }
    const handleAddButtonClick = () => {
        // dispatch(addTodo({
        //     id: uuidv4(),
        //     name: todoName,
        //     priority: priority,
        //     completed: false
        // }))
        //use toolkit
        dispatch(TodoSlice.actions.addTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            completed: false
        }))

        setPriority('Medium')
        setTodoName('');
    }
    return (
        <Row>
            <Col span={24} style={{ height: 'calc(75%', overflowY: 'auto' }}>
                {todoList.map((todo) => (
                    <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} id={todo.id}/>
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{display: 'flex'}} compact>
                    <Input value={todoName} onChange={handleInputChange}/>
                    <Select defaultValue={'Medium'} value={priority} onChange={handlePriorityChange}>
                        <Select.Option value='High' label = 'High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label = 'Medium'>
                            <Tag color='green'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label = 'Low'>
                            <Tag color='blue'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    )
}