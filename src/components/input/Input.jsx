import { FaPlus } from 'react-icons/fa';
import './input.css';
import swal from 'sweetalert';

function Input({ text, handlerCreate }) {
	const handlerSubmitter = (e) => {
		e.preventDefault();
		if (!e.target.task.value)
			return swal({
				text: 'Please provide a task',
				icon: 'warning',
			});
		handlerCreate({ task: e.target.task.value });
	};

	return (
		<form className='form' onSubmit={handlerSubmitter}>
			<input type='text' className='form__input' name='task' />
			<button type='submit' className='button'>
				<span className='button__plus'>{<FaPlus />}</span>
				{text}
			</button>
		</form>
	);
}

export { Input };
