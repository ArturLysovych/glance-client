<template>
    <div class="container">
        <h2 class="w-full font-roboto text-h3 font-h3 flex items-center justify-start gap-[4px] mt-[20px] px-base">
            <router-link class="text-[#ABABAB]" to="/">
              Home
            </router-link>/
            <router-link class="text-[#ABABAB]" to="/cart">
              Cart
            </router-link>/
            <p class="text-[#454545]">Ordering</p>
        </h2>
        <h3 class="w-full flex items-center justify-start gap-[20px] mt-[32px] px-base">
            <router-link class="flex flex-col items-center gap-[8px]" to="/cart">
                <img src="../assets/images/catalog/back.svg" alt="">
            </router-link>
            <p class="font-roboto text-h1 font-h1 text-black">Ordering</p>
        </h3>
        <div class="w-full mt-[28px] flex flex-col items-center font-roboto px-base">
            <div class="w-[343px] h-[118px] border border-purple rounded-[8px] flex flex-col justify-between">
                <div class="">
                    <h2 class="py-[12px] px-[16.5px] text-[18px] font-normal text-black">Address</h2>
                    <div class="h-[1px] bg-purple"></div>
                    <div class="w-full flex justify-between py-[12px] px-[16.5px] gap-[12px]">
                        <input
                            :disabled="addressDisabled"
                            class="w-full outline-none border-none text-h2 font-normal text-black"
                            v-model="address"
                            type="text"
                            />
                        <img @click="ableAddress" class="cursor-pointer h-[25px]" src="../assets/images/ordering/icon-change.svg" alt="" />
                    </div>
                </div>
            </div>
            <h2 class="mt-[40px] text-[18px] font-normal text-black">Сontacts</h2>
            <div class="flex flex-col gap-[15px] w-full items-center mt-[20px]">
              <div class="w-full h-[43px] rounded-[8px] border border-[#454545] flex gap-[12px] items-center justify-start px-[16px]">
                <input v-model="name" class="w-full border-none outline-none text-black text-[16px] font-light" placeholder="Name *" required type="text">
                <img v-if="!isNameValid" src="../assets/images/ordering/warning.svg" alt="">
                <img v-else src="../assets/images/ordering/ok.svg" alt="">
              </div>
              <div class="w-full h-[43px] rounded-[8px] border border-[#454545] flex gap-[12px] items-center justify-start px-[16px]">
                <input v-model="phone" class="w-full border-none outline-none text-black text-[16px] font-light" placeholder="Phone *" required type="tel">
                <img v-if="!isPhoneValid" src="../assets/images/ordering/warning.svg" alt="">
                <img v-else src="../assets/images/ordering/ok.svg" alt="">
              </div>
              <div class="w-full h-[43px] rounded-[8px] border border-[#454545] flex gap-[12px] items-center justify-start px-[16px]">
                <input v-model="email" class="w-full border-none outline-none text-black text-[16px] font-light" placeholder="Email" type="email">
                <img v-if="!isMailValid" src="../assets/images/ordering/warning.svg" alt="">
                <img v-else src="../assets/images/ordering/ok.svg" alt="">
              </div>
            </div>
            <h2 class="mt-[40px] text-[18px] font-normal text-black">Payment</h2>
            <div class="w-[233px] h-[48px] border border-[#169B00] rounded-[8px] flex justify-between items-center px-[12px] mt-[20px] self-start">
                <p class="text-[16px] fony-h2 text-black">Payment is online only</p>
                <img class="h-[24px] w-[24px]" src="../assets/images/ordering/req.svg" alt="">
            </div>
        </div>
        <div class="w-full py-[25px] flex flex-col justify-center items-center border-y border-silver font-roboto gap-[8px] mt-[96px]">
            <h3 class="text-[#454545] text-h4 font-medium">Totally</h3>
            <h2 class="text-black text-h1 font-semibold">{{ totalSum }}$</h2>
            <router-link to="/cart/ordering">
                <button class="w-[267px] h-[49px] bg-navy rounded-[8px] text-whiteSmoke font-roboto text-h2 font-medium"
                    @click="finishOrder"
                >Order</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from 'vue';
import IProduct from '@/interfaces';
import axios from 'axios';

export default defineComponent({
  name: 'OrderingView',
  props: {
    cart: {
      type: Array as PropType<IProduct[]>,
      required: true
    },
    clearCart: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    const name = ref('');
    const phone = ref('');
    const address = ref('Address of the delivery point');
    const email = ref('');
    const addressDisabled = ref(false);

    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const emailRegex = /^.+@.+/;

    const isNameValid = computed(() => {
        return name.value.trim() !== '';
    });

    const isPhoneValid = computed(() => {
        return phoneRegex.test(phone.value);
    });

    const isAddressValid = computed(() => {
        return address.value.trim() !== '';
    });

    const isMailValid = computed(() => {
      return emailRegex.test(email.value);
    });

    const ableAddress = () => {
        addressDisabled.value = !addressDisabled.value;
    };

    const getOrderInfo = () => {
        return {
            customer: {
                name: name.value,
                phone: phone.value,
                email: email.value,
                address: address.value
            },
            order: {
                cart: props.cart
            }
        };
    };

    const finishOrder = () => {
      if (isNameValid.value && isPhoneValid.value && isAddressValid.value && isMailValid.value) {
        axios.post('http://localhost:5000/mailer/send-email', getOrderInfo())
          props.clearCart();
          window.location.href = '/cart/ordering/order-completed';
      } else {
        alert('Enter the data');
      }
    };


    return {
        name,
        phone,
        email,
        address,
        isNameValid,
        isPhoneValid,
        isMailValid,
        ableAddress,
        addressDisabled,
        finishOrder
    };
},
  computed: {
    totalSum() {
      return this.cart.reduce((acc, product) => acc + product.price, 0);
    }
  },
});
</script>