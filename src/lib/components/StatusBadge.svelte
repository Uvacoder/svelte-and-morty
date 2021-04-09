<script>
  export let status = 'unknown'
</script>

<span class="badge {status}"></span>

<style lang="scss">
  .badge {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #aaa;
    display: inline-block;

    &.Alive {
      background-color: #64f169;
    }
    &.Dead {
      background-color: #ff005f;
    }
  }
</style>
