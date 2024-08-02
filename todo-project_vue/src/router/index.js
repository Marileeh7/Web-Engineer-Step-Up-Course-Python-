import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import IssueList from '../views/IssueList.vue';
import TodoList from '../views/TodoList.vue';
import TodosIssues from '../views/TodosIssues.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/issue-list',
    name: 'issue-list',
    component: IssueList
  },
  {
    path: '/todo-list',
    name: 'todo-list',
    component: TodoList
  },
  {
    path: '/todos-issues',
    name: 'todos-issues',
    component: TodosIssues
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
