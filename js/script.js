//console.log('vue test', Vue);

Vue.config.devtools = true;



const root = new Vue({
    el: "#root",
    data: {
        name: 'Michau',
        message: 'Hello',
        lastName: 'Wado',
        image: 'https://w7.pngwing.com/pngs/287/356/png-transparent-yoda-darth-maul-star-wars-jedi-star-wars-background-star-wars-master-yoda-illustration-star-wars-episode-vii-fictional-character-wookieepedia-thumbnail.png',
        welcomeMessage: 'May the force be with you',
        fromUser: '',
    },
    methods: {
        greet() {
            alert(this.welcomeMessage);
        }

    },

})