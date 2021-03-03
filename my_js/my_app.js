new Vue({
    el:'#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGamePlaying: false,
        turns: []

    },
    methods: {  
        handle: function() {
            this.isGamePlaying = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = []
        },
        attack: function(){
            // var max = 10;
            // var min = 3;
            // var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            // this.monsterHealth -= damage;

            // Restructuring

            var damage = this.calculateDamage(3, 10);           
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hit Monster for ' + damage
            });
            if(this.checkWin()){
                return;
            }
           

            // if(this.monsterHealth <= 0){
            //     alert('You won');
            //     this.isGamePlaying = false;
            //     return;
            // }

            // max = 12;
            // min = 5;
            // damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            // this.playerHealth -= damage;
            this.playerAttack();

            
        },
        specialAttack: function(){
            var damage = this.calculateDamage(5, 13);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hit Monster hard for ' + damage
            });
            if(this.checkWin()){
                return;
            }
            this.playerAttack();

        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                playerHealth = 100
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for  10'
            });
            this.playerAttack();

        },
        giveUp: function(){
            this.isGamePlaying = false;
            this.turns = [];

        },

        playerAttack: function(){
            var damage =  this.calculateDamage(4, 11);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hit player for ' + damage
            });
            this.checkWin();

        },

        calculateDamage: function(min, max){
           return Math.max(Math.floor(Math.random() * max) + 1, min);

        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm ('You don finish am!! Start New Game?')){
                    this.handle();
                }else{
                    this.isGamePlaying = false;
                }
                return true;
            }
            else if(this.playerHealth <= 0){
                if(confirm ('Ooin!! You don die Start New Game?')){
                    this.handle();
                }else{
                    this.isGamePlaying = false;
                }
                return true; 
            }
            return false;
            
        }
    },
})