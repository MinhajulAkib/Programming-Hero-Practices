function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'please provide an array of strings';
    }
    let mega = friends[1];
    for (const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['sabbir','rahim','kuddus','rahim','salimkjui','Lion'];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);



if(friends.indexOf('Lion') != -1){
    // console.log('lion exists');
}

// includes
if (friends.includes('Lion')) {
    // console.log('Lion exits using includes');
}

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);