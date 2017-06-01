Vue.component('current-items', {
    template: `
        <div class="current-items">
            <div>{{name}} - {{count}}
            <button v-on:click="getrid">delete</button></div>
        </div>
        </div>
    `,
    props: ['name', 'count'],
    data: function () {
        return {
            
       };
    },
    computed: {},
    methods: {
        getrid: function() {
            this.$emit('deleted');

       }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        weight: 0,
        maxWeight: 500,
        spent: 0,
        maxSpent: 100,
        currentItems: [],
        isOverweight: false,
        isOutOfMoney: false,
        overweight: [],
        overspent: [],
        style: {
            color: ''
        },
        items: [{
            name: 'a poop raft',
            weight: 5,
            cost: 51,
            count: 0,
            pic: './roadtrip/poopraft.jpg',
            added: false
        },
        {
            name: 'a cat',
            weight: 415,
            cost: 0,
            count: 0,
            pic: './roadtrip/cat.jpg',
            added: false,
        },
        {
            name: 'a broken guitar',
            weight: 112,
            cost: 13,
            count: 0,
            pic: './roadtrip/brokenguitar.jpg',
            added: false,
        },
        {
            name: 'one left snowshoe',
            weight: 122,
            cost: 10,
            count: 0,
            pic: './roadtrip/snowshoe.jpg',
            added: false,
        },
        {
            name: 'a stick and bindle of rags and shame',
            weight: 110,
            cost: 0,
            count: 0,
            pic: './roadtrip/bindlestick.jpg',
            added: false,
        },
        {
            name: 'a cooler of beer',
            weight: 130,
            cost: 40,
            count: 0,
            pic: './roadtrip/coolerofbeer.jpg',
            added: false,
        },
        {
            name: 'an eighth of weed',
            weight: 125,
            cost: 0.008,
            count: 0,
            pic: './roadtrip/weed.jpeg',
            added: false,
        },
        {
            name: 'a sandwich',
            weight: 100.5,
            cost: 7,
            count: 0,
            pic: './roadtrip/sandwich.jpeg',
            added: false,
        },
        ]
    },
    methods: {
        addRaft: function () {
            if (this.weight > 500) {
                alert('Youre over your weight limit!');
                this.overweight.push(this.items[0]);
                this.weight += this.items[0].weight;
                this.spent += this.items[0].cost;
                  this.style = {
                    color: 'red'
                  };
            }
            else if (this.spent > 100) {
                alert('youre out of funds!');
                this.overspent.push(this.items[0]);
                this.weight += this.items[0].weight;
                this.spent += this.items[0].cost;
                this.style = {
                    color: 'red'
                };
            } else {
                this.currentItems.push(this.items[0]);
                this.items[0].count += 1;
                this.weight += this.items[0].weight;
                this.spent += this.items[0].cost;
            }
            return this.currentItems, this.weight, this.spent, this.overweight, this.overspent;
        },
        addCat: function () {
            if (this.weight > 500) {
                alert('Youre over your weight limit!');
                this.overweight.push(this.items[1]);
                this.style = {
                    color: 'red',
                };
                 this.weight += this.items[1].weight;
                this.spent += this.items[1].cost;
            }
            else if (this.spent > 100) {
                alert('youre out of funds!');
                this.overspent.push(this.items[1]);
                this.style = {
                    color: 'red',
                };
                 this.weight += this.items[1].weight;
                this.spent += this.items[1].cost;
            } else {
                this.currentItems.push(this.items[1]);
                this.items[1].count += 1;
                this.weight += this.items[1].weight;
                this.spent += this.items[1].cost;
                return this.currentItems, this.weight, this.spent, this.overweight, this.overspent;
            }
        },
        addGuitar: function () {
            if (this.weight > 500) {
                alert('Youre over your weight limit!');
                this.overweight.push(this.items[2]);
                this.weight += this.items[2].weight;
                this.spent += this.items[2].cost;
                this.style = {
                    color: 'red',
                };
            }
            else if (this.spent > 100) {
                alert('youre out of funds!');
                this.overspent.push(this.items[2]);
                this.weight += this.items[2].weight;
                this.spent += this.items[2].cost;
                this.style = {
                    color: 'red',
                };
            } else {
                this.currentItems.push(this.items[2]);
                this.items[2].count += 1;
                this.weight += this.items[2].weight;
                this.spent += this.items[2].cost;
            }
            return this.currentItems, this.weight, this.spent, this.overweight, this.overspent;
        },
        addSnowshoe: function () {
            if (this.weight > 500) {
                alert('Youre over your weight limit!');
                this.overweight.push(this.items[3]);
                this.weight += this.items[3].weight;
                this.spent += this.items[3].cost;
                this.style = {
                    color: 'red',
                };
            }
            else if (this.spent > 100) {
                alert('youre out of funds!');
                this.overspent.push(this.items[3]);
                this.weight += this.items[3].weight;
                this.spent += this.items[3].cost;
                this.style = {
                    color: 'red',
                };
            } else {
                this.currentItems.push(this.items[3]);
                this.items[3].count += 1;
                this.weight += this.items[3].weight;
                this.spent += this.items[3].cost;
            }
            return this.currentItems, this.weight, this.spent, this.overweight, this.overspent;
        },
        addBindleStick: function () {
            if (this.weight > 500) {
                alert('Youre over your weight limit!');
                this.overweight.push(this.items[4]);
                   this.weight += this.items[4].weight;
                this.spent += this.items[4].cost;
                this.style = {
                    color: 'red',
                };
            }
            else if (this.spent > 100) {
                alert('youre out of funds!');
                this.overspent.push(this.items[4]);
                   this.weight += this.items[4].weight;
                this.spent += this.items[4].cost;
                this.style = {
                    color: 'red',
                };
            } else {
                this.currentItems.push(this.items[4]);
                this.items[4].count += 1;
                this.weight += this.items[4].weight;
                this.spent += this.items[4].cost;
            }
            return this.currentItems, this.weight, this.spent, this.overweight, this.overspent;
        },
        addCoolerOfBeer: function () {
            if (this.weight > 500) {
                alert('Youre over your weight limit!');
                this.overweight.push(this.items[5]);
                   this.weight += this.items[5].weight;
                this.spent += this.items[5].cost;
                this.style = {
                    color: 'red',
                };
            }
            else if (this.spent > 100) {
                alert('youre out of funds!');
                this.overspent.push(this.items[5]);
                   this.weight += this.items[5].weight;
                this.spent += this.items[5].cost;
                this.style = {
                    color: 'red',
                };
            } else {
                this.currentItems.push(this.items[5]);
                this.items[5].count += 1;
                this.weight += this.items[5].weight;
                this.spent += this.items[5].cost;
            }
            return this.currentItems, this.weight, this.spent, this.overweight, this.overspent;
        },
        addWeed: function () {
            if (this.weight > 500) {
                alert('Youre over your weight limit!');
                 this.weight += this.items[6].weight;
                this.spent += this.items[6].cost;
                this.overweight.push(this.items[6]);
                this.style = {
                    color: 'red',
                };
            }
            else if (this.spent > 100) {
                alert('youre out of funds!');
                 this.weight += this.items[6].weight;
                this.spent += this.items[6].cost;
                this.overspent.push(this.items[6]);
                this.style = {
                    color: 'red',
                };
            } else {
                this.currentItems.push(this.items[6]);
                this.items[6].count += 1;
                this.weight += this.items[6].weight;
                this.spent += this.items[6].cost;
            }
            return this.currentItems, this.weight, this.spent, this.overweight, this.overspent;
        },
        addSandwich: function () {
            if (this.weight > 500) {
                alert('Youre over your weight limit!');
                this.overweight.push(this.items[7]);
                this.weight += this.items[7].weight;
                this.spent += this.items[7].cost;
                this.style = {
                    color: 'red',
                };
            }
            else if (this.spent > 100) {
                alert('youre out of funds!');
                this.weight += this.items[7].weight;
                this.spent += this.items[7].cost;
                this.overspent.push(this.items[7]);
                this.style = {
                    color: 'red',
                };
            } else {
                this.currentItems.push(this.items[7]);
                this.items[7].count += 1;
                this.weight += this.items[7].weight;
                this.spent += this.items[7].cost;
            }
            return this.currentItems, this.weight, this.spent, this.overweight, this.overspent;
        },

        removeItem: function () {
            alert('You clicked a trashcan!');
            console.log(this.weight);
            console.log(this.currentItems[this.currentItems.length-1]);
            console.log(this.currentItems[this.currentItems.length-1].weight);
            this.weight -= this.currentItems[this.currentItems.length-1].weight;
            this.currentItems.pop();
            console.log('popped!');
            // for (var i = 0; i < this.currentItems.length; i++) {
            //     console.log(`current weight : ${this.weight}`);
            //         this.weight -= this.currentItems[i].weight;
            //         this.spent -= this.currentItems[i].cost;
            //         console.log(`popped' + ${this.currentItems[i].name} + $${this.currentItems[i].cost} + ${this.currentItems[i].weight}lbs`);
            //         this.currentItems.pop(this.currentItems[i]);
                    
             
            // }
        },
        removeItemWeight: function () {
            alert('You clicked an overweight trashcan!');
            this.weight -= this.overweight[this.overweight.length-1].weight;
            this.overweight.pop();
            // for (var i = 0; i < this.overweight.length; i++) {
            //     console.log(`current weight : ${this.weight}`);
            //         this.weight -= this.overweight[i].weight;
            //         console.log(`current item: ${this.overweight[i]}`);
            //         this.spent -= this.overweight[i].cost;
            //         console.log(`popped' + ${this.overweight[i].name} + $${this.overweight[i].cost} + ${this.overweight[i].weight}lbs`);
            //         this.overweight.pop(this.overweight[i]);               
            // }
        },
        removeItemCost : function() {
            alert('You clicked an overpriced trashcan!');
            this.weight -= this.overspent[this.overspent.length-1].weight;
            this.overspent.pop();
            // for (var i = 0; i < this.overspent.length; i++){
            //     console.log(`current weight : ${this.weight}`);
            //     this.weight -= this.overspent[i].weight;
            //     this.spent -= this.overspent[i].cost;
            //       console.log(`popped' + ${this.overspent[i].name} + $${this.overspent[i].cost} + ${this.overspent[i].weight}lbs`);
            //     this.overspent.pop(this.overspent[i]);
            // }

        }
                
    },
});

    // checkWeight : function(){
            //     if (this.weight > 500){
            //         alert('Youre carrying too much stuff! Must delete some items.');
            //     }
            // },
            // checkSpent : function(){
            //     if (this.spent > 100){
            //         alert('You spent too much money on stuff! Must delete some items.');
            //     }
            // }