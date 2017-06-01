Vue.component('current-items',{
    template: `
    <div class='current-items'>
    <img v-bind:src='pic'>
    <div>{{name}}</div>
    <button v-on:click='delete'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> </button>
    `,
    props: ['name', 'pic', 'price', 'weight'],
    data: function(){
        console.log('a function!');
    }, 
    computed: {
        
    },
    methods: {
        delete : function(){
            this.$emit('deleted');
        }
    }
});