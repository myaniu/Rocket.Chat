Meteor.call('checkTokenpassOAuthEnabled', (error, result) => {
	if (result && result === true) {
		RocketChat.slashCommands.add('inventory', null, {
			description: 'Tokenpass_Command_Inventory_Description'
		});

		RocketChat.slashCommands.add('tokens', null, {
			description: 'Tokenpass_Command_Tokens_Description'
		});
	}
});
