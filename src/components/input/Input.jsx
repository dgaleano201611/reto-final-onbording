import { FaPlus } from 'react-icons/fa';
import './input.css';
import swal from 'sweetalert';
import { useState } from 'react';

function Input({ text, handlerCreate }) {
	const [initialValue, setInitialValue] = useState('');

	const handlerSubmitter = (e) => {
		e.preventDefault();
		if (!e.target.task.value)
			return swal({
				text: 'Please provide a task',
				icon: 'warning',
			});
		handlerCreate({ task: e.target.task.value });
		setInitialValue('');
	};

	const handlerInitialValue = (e) => {
		setInitialValue(e.target.value);
	};

	return (
		<form className='form' onSubmit={handlerSubmitter}>
			<input
				type='text'
				className='form__input'
				name='task'
				placeholder='Ingresa tu tarea'
				autoComplete='off'
				onChange={handlerInitialValue}
				value={initialValue}
			/>
			<button type='submit' className='button'>
				<span className='button__plus'>{<FaPlus />}</span>
				{text}
			</button>
		</form>
	);
}

export { Input };
