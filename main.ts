namespace Quottabyte {
    export const QuottaCart = neptune.createCart("QuottaCart", _loadQuottaCart);
    neptune.loadCart(Quottabyte.QuottaCart);
    
    export function _loadQuottaCart() {
        const player = Foundation.buildPlayer(
            img`
            1 1 1 1 1 1 1
            1 1 1 1 1 1 1
            1 1 1 1 1 1 1
            1 1 1 1 1 1 1
            1 1 1 1 1 1 1
            1 1 1 1 1 1 1
            1 1 1 1 1 1 1
        `, // image
            SpriteKind.Player, // sprite kind
            Foundation.applyFlagPreset(
                sprites.flagPresets.DEFAULT
            ), // flag preset
            145, // x-speed
            145 // y-speed
        ); // builds a player from the variables










        /* Plugin */
        let accessWidener = new accessor.Accessor(player); // transfers the 'player' variable to the Accessor
        neptune.bootstrapPlugin(pluginLoader(accessWidener)); // loads the plugin
    }

    export function pluginLoader(access: accessor.Accessor): neptune.Plugin {
        const QuottaPlugin = neptune.createPlugin("QuottaPlugin", _loadQuottaPlugin);

        function _loadQuottaPlugin() {
            const player = access.player; // allows usage of the player outside of the function it is registered in
        }

        return QuottaPlugin;
    }
}