<template>
	<div>
	  <el-button type="success" round @click="getIssues()">Get Issues</el-button>
	  <el-row :gutter="12">
		<TodoItem
		  v-for="(issue, index) in issues"
		  :key="issue.id"
		  :issue="issue.title"
		  :index="index"
		  @closeIssue="closeIssue(index)"
		/>
	  </el-row>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  import TodoItem from '@/components/TodoItem';
  
  const client = axios.create({
	baseURL: process.env.VUE_APP_GITHUB_ENDPOINT,
	headers: {
	  'Accept': 'application/vnd.github.v3+json',
	  'Content-Type': 'application/json',
	  'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`
	},
  });
  
  export default {
	name: 'IssueList',
	components: {
	  TodoItem
	},
	data() {
	  return {
		issues: [],
	  };
	},
	methods: {
	  getIssues() {
		client.get('https://api.github.com/repos/diveintocode-corp/vue_seriese_api')
		  .then((res) => {
			this.issues = res.data;
		  })
		  .catch((error) => {
			console.error('Error fetching issues:', error);
		  });
	  },
	  closeIssue(index) {
		const target = this.issues[index];
		client.patch(`https://api.github.com/repos/diveintocode-corp/vue_seriese_api/${target.number}`, { state: 'closed' })
		  .then(() => {
			this.issues.splice(index, 1);
		  })
		  .catch((error) => {
			console.error('Error closing issue:', error);
		  });
	  },
	},
  };
  </script>
  