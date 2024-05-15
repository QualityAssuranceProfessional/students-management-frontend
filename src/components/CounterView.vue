<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                    <h4 class="cairo-text"><em>حدد عدد الفروع </em></h4>
                </div>
            </div>
            <br>
            <div class="counter" style="position: relative;">
                <button @click="decrementCounter()">-</button>
                <span>{{ counter }}</span>
                <button @click="incrementCounter()">+</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
        counter:0,
    }
  },
  methods: {
      incrementCounter() {
        this.counter++;
      },
      decrementCounter() {
        this.counter--;
      },
    },
}

</script>

<style scoped>
</style>