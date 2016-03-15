/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostCommentRequest class.
 * @constructor
 * Request to post (create) comment
 * @member {string} text Gets or sets comment text
 * 
 * @member {string} [blobType] Gets or sets comment blob type. Possible values
 * include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [blobHandle] Gets or sets comment blob handle
 * 
 * @member {string} [language] Gets or sets comment language
 * 
 */
function PostCommentRequest() {
}

/**
 * Defines the metadata of PostCommentRequest
 *
 * @returns {object} metadata of PostCommentRequest
 *
 */
PostCommentRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostCommentRequest',
    type: {
      name: 'Composite',
      className: 'PostCommentRequest',
      modelProperties: {
        text: {
          required: true,
          serializedName: 'text',
          type: {
            name: 'String'
          }
        },
        blobType: {
          required: false,
          serializedName: 'blobType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Unknown', 'Image', 'Video', 'Custom' ]
          }
        },
        blobHandle: {
          required: false,
          serializedName: 'blobHandle',
          type: {
            name: 'String'
          }
        },
        language: {
          required: false,
          serializedName: 'language',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostCommentRequest;
