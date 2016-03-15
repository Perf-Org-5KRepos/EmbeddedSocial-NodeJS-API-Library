/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostLinkedAccountRequest class.
 * @constructor
 * Request to post (create) linked account
 * @member {string} identityProvider Gets or sets identity provider type.
 * Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
 * 
 * @member {string} [accessToken] Gets or sets access or authentication token,
 * user code, or verifier obtained from third-party provider.
 * The server contacts the third-party provider to use the token
 * (or user code, or verifier) for discover the user's identity.
 * 
 * @member {string} [requestToken] Gets or sets request token obtained from
 * third-party provider.
 * Some providers do not issue authentication or access tokens,
 * but they issue request tokens
 * and verifiers.
 * 
 */
function PostLinkedAccountRequest() {
}

/**
 * Defines the metadata of PostLinkedAccountRequest
 *
 * @returns {object} metadata of PostLinkedAccountRequest
 *
 */
PostLinkedAccountRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostLinkedAccountRequest',
    type: {
      name: 'Composite',
      className: 'PostLinkedAccountRequest',
      modelProperties: {
        identityProvider: {
          required: true,
          serializedName: 'identityProvider',
          type: {
            name: 'Enum',
            allowedValues: [ 'Facebook', 'Microsoft', 'Google', 'Twitter' ]
          }
        },
        accessToken: {
          required: false,
          serializedName: 'accessToken',
          type: {
            name: 'String'
          }
        },
        requestToken: {
          required: false,
          serializedName: 'requestToken',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostLinkedAccountRequest;