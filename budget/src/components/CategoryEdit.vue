<template>
  <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Редагувати</h4>
            </div>

            <form>
              <div class="input-field">
                <select>
                  <option>Category</option>
                </select>
                <label>Вибуріть категорию</label>
              </div>

              <div class="input-field">
                <input type="text" id="name">
                <label for="name">Назва</label>
                  <span class="helper-text invalid">TITLE</span>
              </div>

              <div class="input-field">
                <input id="limit" type="number">
                <label for="limit">Ліміт</label>
                <span class="helper-text invalid">LIMIT</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Обновить
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
</template>
