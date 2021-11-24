var lizzieTheCat = {
    age: 18,
    furcolor: 'grey',
    meow: function() {
        console.log('meowwww');
    },
    eat: function(food) {
        console.log('Yum, I love ' + food);
    },
    sleep: function(numMinutes) {
        for (var i= 0; i<numMinutes; i++){
            console.log('z');
        }
    }
};

lizzieTheCat.meow();
lizzieTheCat.eat('bronw mushy stuff');
lizzieTheCat.sleep(10);