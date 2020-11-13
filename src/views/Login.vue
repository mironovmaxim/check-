<template>
  <form class="form">
    <input type="text" class="form__input" placeholder="Логин">
    <input type="password" class="form__input" placeholder="Пароль">
    <button class="form__button">Войти</button>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.form {
  width: 350px;
  height: 300px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -175px;
  margin-top: -150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.form__input {
  width: 280px;
  height: 60px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 2px;
  background: none;
  color: #FFFFFF;
  padding: 10px 10px 10px 12px;

  &::placeholder {
    color: #FFFFFF;
  }
}

.form__button {
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  color: #ffffff;
  background: #7AAAB9;
}
</style>
