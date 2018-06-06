const {
	GraphQLInt,
	GraphQLString,
} = require('graphql');

const Queries = {
	login:{
		type: GraphQLInt,
		description: '登录接口',
		args: {
			id: {
				type: GraphQLInt,
				description: 'ID'
			}
		},
		resolve(root, args, ctx) {
			console.log("获取的参数", args);
		}

	},
	getName: {
		type: GraphQLString,
		description: '获取用户名称',
		args: {
			id: {
				type: GraphQLInt,

			}
		},
		resolve() {
			return 'wuyz'
		}
	}
};

const Mutations = {

};

module.exports = {
	Queries,
	Mutations,
} ;