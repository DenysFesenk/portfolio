<template>
  <div class="contact">
      <ul class="contact__list">
          <li class="contact__item"><a href="mailto:dfesuk@gmail.com" target="_blank"><img src="../assets/email.png" alt="dfesuk@gmail.com"></a></li>
          <li class="contact__item"><a href="tel:+380988889845" target="_blank"><img src="../assets/call.png" alt="+380988889845"></a></li>
          <li class="contact__item"><a href="https://linkedin.com/in/denys-fesenko-04aa9b172/" target="_blank"><img src="../assets/linkedin-logo.png" alt="linkedin"></a></li>
          <li class="contact__item"><a href="https://github.com/DenysFesenk/" target="_blank"><img src="../assets/github.png" alt="github"></a></li>
          <li class="contact__item"><a href="https://t.me/Dfesk" target="_blank"><img src="../assets/telegram.png" alt="telegram"></a></li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style lang="scss">
    .contact{
        height: 90vh;
        @include flex(center, center);
        &__list{
            @include flex;
        }
        &__item{
            margin-right: 20px;
            &:last-child{
                margin-right: 0;
            }
            img{
                width: 32px;
            }
        }
    }
</style>