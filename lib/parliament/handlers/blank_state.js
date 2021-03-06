"use strict";

// Include our helper methods
const helpers = require("../helpers");

/**
 * Alexa blank state intent handlers
 */
module.exports = {
    /**
     * AMAZON.YesIntent handler - stops the session
     *
     * @function
     */
    "AMAZON.YesIntent": function () {
        helpers.logHandler(this.name);

        this.handler.state = helpers.states.NULL_STATE;

        this.emitWithState(this.name);
    },

    /**
     * AMAZON.NoIntent handler - stops the session
     *
     * @function
     */
    "AMAZON.NoIntent": function () {
        helpers.logHandler(this.name);

        this.handler.state = helpers.states.NULL_STATE;

        this.emitWithState(this.name);
    },

    /**
     * AMAZON.CancelIntent handler - stops the session
     *
     * @function
     */
    "AMAZON.CancelIntent": function () {
        helpers.logHandler(this.name);

        this.handler.state = helpers.states.NULL_STATE;

        this.emitWithState(this.name);
    },

    /**
     * AMAZON.StopIntent handler - stops the session
     *
     * @function
     */
    "AMAZON.StopIntent": function () {
        helpers.logHandler(this.name);

        this.handler.state = helpers.states.NULL_STATE;

        this.emitWithState(this.name);
    },

    /**
     * AMAZON.HelpIntent handler - gives a clear message explaining what the skill can 1~do
     *
     * @function
     */
    "AMAZON.HelpIntent": function () {
        helpers.logHandler(this.name);

        this.handler.state = helpers.states.NULL_STATE;

        this.emitWithState(this.name);
    },

    /**
     * LaunchRequest handler - gives a welcome message and explains usage instructions
     *
     * @function
     */
    "LaunchRequest": function () {
        helpers.logHandler(this.name);

        this.handler.state = helpers.states.NULL_STATE;

        this.emitWithState(this.name);
    },

    /**
     * WhatsOnIntent - sets the skill state to 'WHATS_ON' and calls the state-specific intent.
     *
     * @function
     */
    "WhatsOnIntent": function () {
        helpers.logHandler(this.name);

        this.handler.state = helpers.states.NULL_STATE;

        this.emitWithState(this.name);
    },

    /**
     * Unhandled handler - resets the state and stops the session
     *
     * @function
     */
    "Unhandled": function () {
        helpers.logHandler(this.name);

        this.handler.state = helpers.states.NULL_STATE;

        this.emitWithState(this.name);
    }
};
