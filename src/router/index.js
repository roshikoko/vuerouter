import Vue from 'vue'
import VueRouter from 'vue-router'

//官方元件


import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';

Vue.use(VueRouter);

export default new VueRouter({
    //mode:'history', //不建議使用此方式，建議直接使用#
    //linkActiveClass:'active',
    routes:[
        {
            name:'首頁', //元件呈現的名稱
            path:'/index', //對應的虛擬路徑
            component:Home, //對應的元件
        },
        {
           // name:'分頁', //元件呈現的名稱
            path:'/page', //對應的虛擬路徑
           // component:Page, //對應的元件
            components:{
                default:Page,
                menu:Menu,
            },
            children:[
                {
                    name:'卡片 1',
                    path:'',
                    component:child
                },
                {
                    name:'卡片 2',
                    path:'child2',
                    component:child2
                },
                {
                    name:'卡片 3',
                   // path:'child/:id',
                   path:'child3',
                    component:child3
                },
            ]
        }
    ]
});
