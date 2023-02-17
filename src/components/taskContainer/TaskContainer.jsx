import { useEffect, useState } from 'react';
import { Task } from '../task/Task';
import { Input } from '../input/Input';
import { Header } from '../header/Header';
import { taskService } from '../../services/task.service';
import './taskContainer.css';
import swal from 'sweetalert';

function TaskContainer() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		taskService.getTasks().then((res) => {
			if (res.error) return;
			setTasks(res);
		});
	}, []);

	const deleteTask = (id) => {
		swal({
			title: 'Are you sure?',
			text: '¿Do you want to delete this task?',
			icon: 'warning',
			buttons: ['No, take me back!', 'Yes, delete it'],
			dangerMode: true,
		}).then((isConfirm) => {
			if (isConfirm) {
				taskService.deleteTask(id);
				const newTaskList = tasks.filter((e) => e.id !== id);
				setTasks(newTaskList);
			}
		});
	};

	const createTask = (task) => {
		taskService.postTask(task).then((res) => {
			setTasks([...tasks, res]);
			swal({ text: 'Task added succesfully', icon: 'success' });
		});
	};

	const handlerIsDone = (id) => {
		const isFind = tasks.find((e) => e.id === +id);
		if (isFind) {
			setTasks(tasks.map((e) => (e.id === +id ? { ...isFind, isDone: !isFind.isDone } : e)));
			taskService.putTask({ ...isFind, isDone: !isFind.isDone });
		}
	};

	const handlerUpdateTask = (task) => {
		const isFind = tasks.find((e) => e.id === +task.id);
		if (isFind) {
			setTasks(tasks.map((e) => (e.id === +task.id ? { ...isFind, ...task } : e)));
			taskService.putTask(task);
		}
	};

	return (
		<section className='target'>
			<Header title={'to-do-list'} />
			<main className='content'>
				<Input text='Agregar' handlerCreate={createTask} />
				{!tasks.length ||
					tasks.map((e) => {
						return (
							<Task
								key={e.id}
								task={e.task}
								id={e.id}
								deleter={deleteTask}
								committer={handlerIsDone}
								isDone={e.isDone}
								taskUpdater={handlerUpdateTask}
							/>
						);
					})}
			</main>
		</section>
	);
}
export { TaskContainer };
