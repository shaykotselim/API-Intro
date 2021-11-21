// JavaScript Object Notation / JSON
const user = {id: 43500, name:'Gorib-Amir', job: 'Actor'};

const stringifyed = JSON.stringify(user);
// console.log(stringifyed);
// console.log(user);

const shop = {
        name:'Alia-Store',
        address: 'Ranveer Road',
        profit: 1500,
        onower:{name:'Alia-Bhat', Profession:'actor'},
        product: ['laptop', 'mobile', 'keybord', 'mouse' ],
        isExpensive: false,
}

const shopStringify = JSON.stringify(shop);
const converted = JSON.parse(shopStringify)

// console.log(shop);
// console.log(shopStringify);
// console.log(converted.onower);

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
 console.log(stuInfo.name);