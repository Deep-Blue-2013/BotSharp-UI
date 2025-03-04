/**
 * @typedef {Object} UserModel
 * @property {string} id - The user id.
 * @property {string} [user_name] - User name
 * @property {string} [first_name] - The user first name.
 * @property {string} [last_name] - The user last name.
 * @property {string} [full_name] - The user full name.
 * @property {string} [email] - The user email.
 * @property {string} [external_id] - The user external id.
 * @property {string} [create_date] - The user create date.
 * @property {string} [update_date] - The user update date.
 * @property {string} [role] - The user role.
 * @property {string} [avatar] - The user avatar.
 * @property {string} [color]
 * @property {string} [token]
 */

/**
 * @typedef {Object} Pagination
 * @property {number} page - The plugin full name.
 * @property {number} size - The plugin name.
 * @property {number} count - Row count.
 */

/**
 * @template T
 * @typedef {Object} PagedItems<T>
 * @property {number} count - Row count.
 * @property {T[]} items - Items.
 */

/**
 * @typedef {Object} PluginDefModel
 * @property {string} id - The plugin full name.
 * @property {string} name - The plugin name.
 * @property {string} description - The plugin description.
 * @property {string} assembly - The plugin assembly.
 * @property {boolean} is_core
 * @property {string} icon_url
 * @property {string} [settings_name]
 * @property {string[]} agent_ids
 * @property {boolean} enabled
 */

/**
 * @typedef {Object} PluginMenuDefModel
 * @property {string} label
 * @property {string} icon
 * @property {string} link
 * @property {boolean} isHeader
 */

/**
 * @typedef {Object} PluginFilter
 * @property {Pagination} pager - Pagination
 */

/**
 * @typedef {Object} AgentWelcomeInfo
 * @property {string[]} messages - The welcome messages in Rich content format.
 */

/**
 * @typedef {Object} AgentTemplate
 * @property {string} name
 * @property {string} content
 */

/**
 * @typedef {Object} AgentLlmConfig
 * @property {boolean} is_inherit - Inherited from default Agent settings
 * @property {string} provider 
 * @property {string} model
 */

/**
 * @typedef {Object} LlmModelSetting
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef {Object} FunctionDef
 * @property {string} name 
 * @property {string} description
 */

/** 
 * @typedef {Object} AgentFilter
 * @property {Pagination} pager - Pagination
 * @property {boolean} [isRouter]
 * @property {boolean} [isEvaluator]
 * @property {boolean} [allowRouting]
 * @property {boolean} [disabled]
 */

/**
 * @typedef {Object} AgentModel
 * @property {string} id - Agent Id.
 * @property {string} name - Agent name.
 * @property {string} description - Agent description.
 * @property {string} instruction - System prompt
 * @property {boolean} disabled
 * @property {boolean} is_public
 * @property {boolean} is_router
 * @property {boolean} is_host
 * @property {string} icon_url - Icon
 * @property {boolean} allow_routing
 * @property {string[]} profiles - The agent profiles.
 * @property {Date} created_datetime
 * @property {Date} updated_datetime
 * @property {AgentLlmConfig} llm_config - LLM settings.
 * @property {PluginDefModel} plugin
 * @property {FunctionDef[]} functions
 * @property {AgentTemplate[]} templates
 * @property {Object[]} responses
 * @property {AgentWelcomeInfo} welcome_info - Welcome information.
 */

/**
 * @typedef {Object} AgentSettings
 * @property {string} dataDir
 * @property {string} templateFormat
 * @property {AgentLlmConfig} llmConfig - LLM settings.
 */

/**
 * @typedef {Object} RouterSettings
 * @property {string} agentId
 * @property {string} planner
 */

/**
 * @typedef {Object} ConversationFilter
 * @property {Pagination} pager - Pagination
 * @property {string?} [agentId] - The agent id.
 * @property {string?} [channel] - The conversation channel.
 * @property {string?} [status] - The conversation status.
 */

/**
 * @typedef {Object} ConversationModel
 * @property {string} id - The conversation id.
 * @property {string} title - The conversation title.
 * @property {UserModel} user - The conversation initializer.
 * @property {string} agent_id - The conversation agent id.
 * @property {string} channel - The conversation status.
 * @property {string} status - The conversation status.
 * @property {Object[]} states - The conversation states. 
 * @property {number} unread_msg_count - The unread message count.
 * @property {Date} updated_time - The conversation updated time.
 * @property {Date} created_time - The conversation created time.
 */

/**
 * @interface
 * @class
 * @classdesc A basic rich content interface.
 */
function IRichContent() {}

/**
 * The type of the rich content.
 *
 * @name rich_type
 * @type {string}
 * @instance
 */
IRichContent.prototype.rich_type;

/**
 * The text of the rich content.
 *
 * @name text
 * @type {string}
 * @instance
 */
IRichContent.prototype.text;

/**
 * @typedef {Object} TextMessage
 * @property {string} text
 * @property {string} rich_type 
 */

/**
 * @typedef {Object} QuickReplyElement
 * @property {string} content_type
 * @property {string} title
 * @property {string} payload
 * @property {string} image_url 
 */

/**
 * @typedef {Object} QuickReplyMessage
 * @property {string} text
 * @property {string} rich_type
 * @property {QuickReplyElement[]} quick_replies
 */

/**
 * @typedef {Object} RichContent
 * @property {string} messaging_type
 * @property {IRichContent} message
 */

/**
 * @typedef {Object} ChatResponseModel
 * @property {string} conversation_id - The conversation id.
 * @property {UserModel} sender - The message sender.
 * @property {string} message_id - The message id.
 * @property {string} text - The message content.
 * @property {RichContent} rich_content - Rich content
 * @property {Date} created_at - The message sent time.
 */

/**
 * @typedef {Object} ContentLogModel
 * @property {string} conversation_id - The conversation id.
 * @property {string} content - The log content.
 * @property {Date} created_at - The log sent time.
 */

/**
 * Invoked when a new conersation is created.
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback OnConversationInitialized
 * @param {ConversationModel} conversation
 */

/**
 * Invoked when message is received form chatHub.
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback OnMessageReceived
 * @param {ChatResponseModel} message
 */

/**
 * Invoked when speech to text is detected.
 *
 * @callback OnSpeechToTextDetected
 * @param {string} text
 */

/** 
 * Content log
 * 
 * @callback OnContentLogReceived
 * @param {ContentLogModel} log
 */

// having to export an empty object here is annoying, 
// but required for vscode to pass on your types. 
export default {};