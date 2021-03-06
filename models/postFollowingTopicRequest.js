/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * <autogenerated> This file was generated using AutoRest. </autogenerated>
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostFollowingTopicRequest class.
 * @constructor
 * Request to follow a topic
 * @member {string} topicHandle Gets or sets topic handle
 * 
 */
function PostFollowingTopicRequest() {
}

/**
 * Defines the metadata of PostFollowingTopicRequest
 *
 * @returns {object} metadata of PostFollowingTopicRequest
 *
 */
PostFollowingTopicRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostFollowingTopicRequest',
    type: {
      name: 'Composite',
      className: 'PostFollowingTopicRequest',
      modelProperties: {
        topicHandle: {
          required: true,
          serializedName: 'topicHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostFollowingTopicRequest;
