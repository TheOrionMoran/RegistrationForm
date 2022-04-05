<template>
    <div class="app">
        <div class="main">
            <transition name="bounce">
                <div v-if="v$.$error" name="bounce" class="error">
                    <p>Ошибка!</p>
                    <p>Исправьте ошибки</p>
                </div>
            </transition>
            <transition name="bounce">
                <div v-if="!v$.$error && showAccept" name="bounce" class="accept">
                    <p>Готово!</p>
                    <p>Новый клиент успешно создан</p>
                </div>
            </transition>
            <h1>Заполните форму</h1>
            <div class="form">
                <div class="pWrapper">
                    <p>Фамилия <span v-if="v$.lastName.$error == true">*</span> </p>
                </div>
                <input type="text" v-model="lastName">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Имя <span v-if="v$.name.$error == true">*</span> </p>
                </div>
                <input type="text" v-model="name">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Отчество </p>
                </div>
                <input type="text">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Дата рождения <span v-if="v$.dateOfBirth.$error == true">*</span></p>
                </div>
                <input v-model="dateOfBirth" type="date">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Номер телефона <span v-if="v$.phoneNumber.$error == true">*</span></p>
                </div>
                <input type="number" v-model="phoneNumber">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Пол</p>
                </div>
                <div class="radioWrapper">
                    <div>
                        <input type="radio" id="sex1" name="sex">
                        <label for="sex1" name="sex1">Мужской</label>
                    </div>

                    <div>
                        <input type="radio" id="sex2" name="sex">
                        <label for="sex2" name="sex2">Женский</label>
                    </div>
                </div>
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Группа клиентов <span v-if="v$.customerGroup.$error == true">*</span></p>
                </div>
                <select class="select1" multiple size="1" v-model="customerGroup">
                    <option
                     v-for="(customer, index) in customerGroups" :key="index" :value="customer.value">{{customer.label}}</option>
                </select>
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Лечащий врач</p>
                </div>
                <select class="select1" size="1">
                    <option>Иванов</option>
                    <option>Захаров</option>
                    <option>Чернышева</option>
                </select>
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Не отправлять СМС</p>
                </div>
                <div class="radioWrapper">
                    <div>
                        <input type="checkbox" id="sms" name="sms">
                        <label for="sms">Да/Нет</label>
                    </div>
                </div>
            </div>
            <h1>Адрес</h1>
            <div class="form">
                <div class="pWrapper">
                    <p>Индекс</p>
                </div>
                <input type="number">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Страна</p>
                </div>
                <input type="text">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Область</p>
                </div>
                <input type="text">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Город <span v-if="v$.city.$error == true">*</span></p>
                </div>
                <input type="text" v-model="city">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Улица</p>
                </div>
                <input type="text">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Дом</p>
                </div>
                <input type="text">
            </div>
            <h1>Паспорт</h1>
            <div class="form">
                <div class="pWrapper">
                    <p>Тип документа<span v-if="v$.documentType.$error == true">*</span></p>
                </div>
                <select class="select2" size="1" v-model="documentType">
                    <option
                     v-for="(doc, index) in documentTypes" :key="index" :value="doc.value">{{doc.label}}</option>
                </select>
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Серия</p>
                </div> 
                <input type="number">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Номер</p>
                </div>
                <input type="number">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Кем выдан</p>
                </div>
                <input type="text">
            </div>
            <div class="form">
                <div class="pWrapper">
                    <p>Дата выдачи</p>
                </div>
                <input type="date" v-model="DateOfIssue">
            </div>
            <button v-on:click="CheckValid()">Готово</button>
            
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { minLength,required } from '@vuelidate/validators'
export default{
    name: 'MainComponent',
     setup: () => ({ v$: useVuelidate({ $lazy: true, $autoDirty: true }) }),
    data() {
        return{
            lastName: '',
            name: '',
            dateOfBirth: '',
            phoneNumber: '',
            customerGroup: [],
            customerGroups: [
                {
                    label: 'VIP',
                    value: 'vip'
                },
                {
                    label: 'Проблемные',
                    value: 'roblematic'
                },
                {
                    label: 'ОМС',
                    value: 'oms'
                }
            ],
            city: '',
            documentType: '',
            documentTypes: [
                {
                    label: 'Паспорт',
                    value: 'passport'
                },
                {
                    label: 'Свидетельство о рождении',
                    value: 'birthCertificate'
                },
                {
                    label: 'Вод. удостоверение',
                    value: 'driversLicense'
                }
            ],
            DateOfIssue: '',
            showAccept: false
        }
    },
    methods: {
        CheckValid() {
            this.v$.$touch()
            if(!this.v$.$error){
                this.showAccept = true
            }
        },
    },
    validations() {
        return {
            lastName: { required,minLength: minLength(3) },
            name: { required,minLength: minLength(3) },
            dateOfBirth: { required },
            phoneNumber: { required,minLength: minLength(11) },
            customerGroup: { required },
            city: { required,minLength: minLength(3) },
            documentType:{ required },
        }
    }
}
</script>

