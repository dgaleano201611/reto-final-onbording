import { BsCheck } from 'react-icons/bs';
import { HiPencilSquare } from 'react-icons/hi2';
import { TiDeleteOutline } from 'react-icons/ti';
import './task.css';
import { useState } from 'react';

function Task({ id, task, deleter, isDone, committer, taskUpdater }) {
	const [edit, setEdit] = useState(false);
	const [userInput, setUserInput] = useState('');

	const handlerDeleter = () => {
		deleter(+id);
	};
	const handlerCommitter = () => {
		committer(id);
	};
	const handlerEdit = () => {
		if (userInput !== '') {
			taskUpdater({ id, task: userInput, isDone: false });
		}
		setEdit(!edit);
		setUserInput('');
	};
	const handlerInputUser = (e) => {
		setUserInput(e.target.value);
	};

	return (
		<section className='section-task'>
			<div className={`${isDone && 'isDone'} task`}>
				<article className='task-info'>
					<p className='task__id'>{id}</p>
					{edit ? (
						<input type='text' defaultValue={task} className='inputEdit' onChange={handlerInputUser} />
					) : (
						<p className='task__paragraph'>{task}</p>
					)}
				</article>
				<article className='buttons-container'>
					<button
						className={`${isDone && 'button-check--isDone'} button-check`}
						onClick={handlerCommitter}
					>
						{<BsCheck size={20} color='white' />}
					</button>
					<button className='button-edit' onClick={handlerEdit}>
						{' '}
						{<HiPencilSquare size={20} color='white' />}
					</button>
					<button className='button-delete' onClick={handlerDeleter}>
						{<TiDeleteOutline size={20} color='white' />}
					</button>
				</article>
			</div>
		</section>
	);
}

export { Task };
