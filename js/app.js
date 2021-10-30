var vueApp = new Vue({
    el: '#vue-app',
    data: {
        ro: 1.225,
        cy: 1.04,
        v: 41,
        s: 11.5,
        fw: 620,
    },
    methods: {},
    beforeMount() {
        console.log('App mounted!');
        if (localStorage.getItem('moneySeries')) this.moneySeries = JSON.parse(localStorage.getItem('moneySeries'));
    },
    computed: {
        result: function() {

            let s = (this.s * 0.514444444)
            let f = ((this.ro * (this.v * this.v)) / 2) * s;
            return ((this.cy * f)/10.2).toFixed(3);
        },
    }
});