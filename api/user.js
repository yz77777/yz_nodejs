const {
	GraphQLInt,
	GraphQLString,
} = require('graphql');

const Queries = {
	userlist:{
		type: GraphQLInt,
		description: '用户列表',
		args: {
			status: {
				type: GraphQLInt,
				description: '状态'
			}
		},
		resolve(root, args, ctx) {
			console.log("获取的参数", args);
		}

	},

};

const Mutations = {

};

module.exports = {
	Queries,
	Mutations,
} ;