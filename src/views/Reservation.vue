<template>
  <div>
    <main>
      <div class="booking-box">
        <BookingInfo />
        <BookingForm />
      </div>
    </main>
  </div>
</template>

<script>
import BookingInfo from '../components/payment/BookingInfo.vue';
import BookingForm from '../components/payment/BookingForm.vue';

export default {
  components: {
    BookingForm,
    BookingInfo
  },
  data() {
    return {
      bookingData: this.response
    };
  }
};
</script>

<style>
.user-actions a {
  color: #0f0;
  text-decoration: none;
  margin-left: 15px;
}

main {
  flex-grow: 1;
  padding: 50px 20px;
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: flex-start;
}
.booking-box {
  width: 80%; /* 너비 조정 */
  display: flex;
  justify-content: center; /* 간격 추가 */
  gap: 5rem; /* BookingInfo와 BookingForm 사이에 간격 추가 */
}

h1, h2, h3 {
  color: #0f0;
  text-shadow: 0 0 10px #0f0;
}
p {
  line-height: 1.6;
}
form {
  display: flex;
  flex-direction: column;
}
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.selection-button {
  padding: 10px 20px;
  background-color: #001100;
  color: #0f0;
  border: 1px solid #0f0;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.selection-button:hover, .selection-button.selected {
  background-color: #0f0;
  color: #000;
}
button[type="submit"] {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0f0;
  color: #000;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
button[type="submit"]:hover {
  background-color: #00ff00;
}
#total-price {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20px;
}
.booking-info {
  background-color: #002200;
}
.booking-info h2 {
  margin-top: 0;
}
</style>