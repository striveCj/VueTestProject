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
    }
  ]
})
