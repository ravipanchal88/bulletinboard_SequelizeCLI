
module.exports = function(sequelize, Sequelize) {
	return(sequelize.define('message', {
		title: Sequelize.STRING,
		body:  Sequelize.TEXT
		
	}, {
		defaultScope: {
			order: [['createdAt', 'DESC']]
		},
	  getterMethods: {
			url: function() {
				return('/');
			}
	  }
	}));
};