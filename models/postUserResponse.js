/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostUserResponse class.
 * @constructor
 * Response from post (create) user
 * @member {string} userHandle Gets or sets user handle
 * 
 * @member {string} sessionToken Gets or sets the session token generated by
 * our server.
 * The client saves the session token and sends it with every
 * request
 * 
 */
function PostUserResponse() {
}

/**
 * Defines the metadata of PostUserResponse
 *
 * @returns {object} metadata of PostUserResponse
 *
 */
PostUserResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostUserResponse',
    type: {
      name: 'Composite',
      className: 'PostUserResponse',
      modelProperties: {
        userHandle: {
          required: true,
          serializedName: 'userHandle',
          type: {
            name: 'String'
          }
        },
        sessionToken: {
          required: true,
          serializedName: 'sessionToken',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostUserResponse;