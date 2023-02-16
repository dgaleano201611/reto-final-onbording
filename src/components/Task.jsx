import {BsCheckSquareFill} from 'react-icons/bs'
import {HiPencilSquare} from 'react-icons/hi2'
import {TiDeleteOutline} from 'react-icons/ti'
import {FaPlus} from 'react-icons/fa'
import './task.css'

function Task() {
  return (
    <section className="target">
      <header className="header">
        <p className="header__paragraph">To-do-List</p>
      </header>
      <main className="content">
        <form className="form">
          <input type="text" className="form__input" />
          <button type="submit" className="button">
            <span className='button__plus'>{ <FaPlus /> }</span>Agregar
          </button>
        </form>

        <section className="section-task">
          <div className="task">
            <span className="content_method--number">1</span>
            <p className="content__method--paragraph">Programar</p>
            <section className="content__task">
              <button className="content__task--program">
                {<BsCheckSquareFill />}
              </button>
              <button className="content__task--run">
                {" "}
                {<HiPencilSquare />}
              </button>
              <button className="content__task--cook">
                {" "}
                {<TiDeleteOutline />}
              </button>
            </section>
          </div>
        </section>
      </main>
    </section>
  );
}
export { Task };
