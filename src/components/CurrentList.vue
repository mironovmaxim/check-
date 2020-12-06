<template>
    <article class="current-list">
      <p class="current-list__title">
        Текущие активы
      </p>
      <ul class="current-list__items">
        <li class="current-list_item">
          <span>Максим</span>
          <span>40 000 ₽</span>
        </li>
        <li class="current-list_item">
          <span>Анастасия</span>
          <span>20 000 ₽</span>
        </li>
      </ul>
    </article>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.current-list__title {
  margin-bottom: 8px;
}
.current-list__items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.current-list_item {
  width: 100%;
  height: 70px;
  background: rgba(68, 67, 104, 0.25);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;
  padding-left: 18px;
  box-sizing: border-box;

  & span {
    font-size: 18px;
    line-height: 22px;
  }
}

</style>
