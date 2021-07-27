//console.log('vue test', Vue);

Vue.config.devtools = true;



const root = new Vue({
    el: "#root",
    data: {
        name: '',
        message: 'Hello',
        lastName: 'Wado',
        imageName: 'Yoda',
        image: './img/yoda.png', //volevo inserire png ma non trovavo l'immagine hostata online trasparente
        welcomeMessage: 'May the force be with you',
        fromUser: '',
        classColor: 'black',
    },
    methods: {
        greet() {
            alert(this.welcomeMessage);
        },

        colorToggle() {
            if (this.classColor === 'default-color') {
                this.classColor = 'black'
            } else {
                this.classColor = 'default-color'
            }
        }

    },

})