import { FiEdit2, FiTrash2 } from "react-icons/fi";
import scss from "./admin.module.scss";

const Admin = () => {
  return (
    <div className={scss.admin}>
      <div className="container">
        <section className={scss.addSection}>
          <h1 className={scss.sectionTitle}>Добавить тур</h1>

          <form className={scss.form}>
            <div className={scss.field}>
              <label>Название тура</label>
              <input id="title" name="title" type="text" />
            </div>

            <div className={scss.field}>
              <label htmlFor="description">Описание</label>
              <textarea id="description" name="description" rows={3} />
            </div>
            <div className={scss.field}>
              <label htmlFor="types">Виды туров</label>
              <input id="types" name="types" type="text" />
            </div>
            <div className={scss.row}>
              <div className={scss.field}>
                <label htmlFor="image">Картинка</label>
                <input id="image" name="image" type="text" />
              </div>
              <div className={scss.field}>
                <label htmlFor="link">Подробнее о туре (название)</label>
                <input id="link" name="link" type="text" />
              </div>
            </div>
            <div className={scss.row}>
              <div className={scss.field}>
                <label htmlFor="price">Цена тура</label>
                <input id="price" name="price" type="text" />
              </div>

              <div className={scss.field}>
                <label htmlFor="details">Подробнее о туре (описание)</label>
                <textarea id="details" name="details" rows={3} />
              </div>
            </div>

            <div className={scss.row}>
              <div className={scss.field}>
                <label htmlFor="duration">Продолжительность тура</label>
                <input id="duration" name="duration" type="text" />
              </div>
              <div className={scss.field}>
                <label htmlFor="people">Количество человек</label>
                <input id="people" name="people" type="text" />
              </div>
            </div>

            <button type="button" className={scss.submitBtn}>
              Добавить
            </button>
          </form>
        </section>

        <section className={scss.toursSection}>
          <h2 className={scss.sectionTitle}>Добавленные туры</h2>

          <div className={scss.toursList}>
            <article className={scss.tourCard}>
              <img
                src="https://i.pinimg.com/1200x/2b/43/10/2b4310148f7906154ddf845541cbffba.jpg"
                alt="Иссык-Куль"
                className={scss.tourImage}
              />
              <div className={scss.tourBody}>
                <h3 className={scss.tourTitle}>Иссык-Куль</h3>
                <p className={scss.tourDescription}>
                  Иссык-Кульская область расположена на востоке Кыргызстана.
                  Административный центр — город Каракол.
                </p>
                <div className={scss.tourFooter}>
                  <span className={scss.tourPrice}>7500 сом</span>
                  <div className={scss.tourActions}>
                    <button
                      type="button"
                      className={scss.actionBtn}
                      aria-label="Редактировать"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      type="button"
                      className={scss.actionBtn}
                      aria-label="Удалить"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
