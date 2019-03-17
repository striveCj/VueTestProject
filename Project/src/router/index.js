import Vue from 'vue'
import Router from 'vue-router'
import SayHi from '@/components/SayHi'
import Hello from '@/components/Hello'
import HelloWorld from '@/components/HelloWorld'
import BlogsList from '@/components/BlogList'
import Blog from '@/components/Blog'
import TwoWayBinding from '@/components/TwoWayBinding'
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'
import SayHiFromMixin from '@/components/SayHiFromMixin'
import ShowCounter1 from '@/components/ShowCounter1'
import ShowCounter2 from '@/components/ShowCounter2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
    },
    {
      path: '/say_hi_from_varlable',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blog_List',
      name: 'BlogList',
      component: BlogsList
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/twoWayBinding',
      name: 'TwoWayBinding',
      component: TwoWayBinding
    },
    {
      path: '/form_input',
      name: 'FormInput',
      component: FormInput
    },
    {
      path: '/form_submit',
      name: 'FormSubmit',
      component: FormSubmit
    },
    {
      path: '/say_hi_from_mixin',
      name: 'SayHiFromMixin',
      component: SayHiFromMixin
    },
    {
      path: '/show_counter_1',
      name: 'ShowCounter1',
      component: ShowCounter1
    },
    {
      path: '/show_counter_2',
      name: 'ShowCounter2',
      component: ShowCounter2
    }
  ]
})
