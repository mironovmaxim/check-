<template>
  <form class="form">
    <input type="text" class="form__input" placeholder="Логин">
    <input type="password" class="form__input" placeholder="Пароль">
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.form {
  width: 400px;
  height: 300px;
  background-color: #444368;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -180px;
  margin-top: -111px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.form__input {
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: rgba(214, 214, 214, 0.2);
  color: #FFFFFF;
  border: none;
  padding: 12px 0px 11px 22px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &::placeholder {
    color: #FFFFFF;
  }
}
</style>
