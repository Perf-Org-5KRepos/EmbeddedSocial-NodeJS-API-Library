/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostFollowingRequest class.
 * @constructor
 * Request to post a following (follow user)
 * @member {string} userHandle Gets or sets user handle
 * 
 */
function PostFollowingRequest() {
}

/**
 * Defines the metadata of PostFollowingRequest
 *
 * @returns {object} metadata of PostFollowingRequest
 *
 */
PostFollowingRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostFollowingRequest',
    type: {
      name: 'Composite',
      className: 'PostFollowingRequest',
      modelProperties: {
        userHandle: {
          required: true,
          serializedName: 'userHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostFollowingRequest;
