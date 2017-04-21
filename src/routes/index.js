export default [
    { name: 'home', path: '/', component: require('../pages/Home.vue') },
    { name: 'picture', path: '/picture/:id', component: require('../pages/Picture.vue') },
];