/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostBlobResponse class.
 * @constructor
 * Response from post (create) blob
 * @member {string} blobHandle Gets or sets blob handle
 * 
 */
function PostBlobResponse() {
}

/**
 * Defines the metadata of PostBlobResponse
 *
 * @returns {object} metadata of PostBlobResponse
 *
 */
PostBlobResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostBlobResponse',
    type: {
      name: 'Composite',
      className: 'PostBlobResponse',
      modelProperties: {
        blobHandle: {
          required: true,
          serializedName: 'blobHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostBlobResponse;
