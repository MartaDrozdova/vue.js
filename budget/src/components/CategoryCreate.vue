<template>
  <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Створити</h4>
            </div>

            <form>
              <div class="input-field">
                <input id="name" type="text">
                <label for="name">Назва</label>
                <span class="helper-text invalid">Ведіть назву</span>
              </div>

              <div class="input-field">
                <input id="limit" type="number">
                <label for="limit">Ліміт</label>
                <span class="helper-text invalid">Мінімальна величина</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Создать
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
</template>
