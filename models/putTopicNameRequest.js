/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * <autogenerated> This file was generated using AutoRest. </autogenerated>
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PutTopicNameRequest class.
 * @constructor
 * Request to put (update) a topic name
 * @member {string} publisherType Gets or sets publisher type. Possible values
 * include: 'User', 'App'
 * 
 * @member {string} topicHandle Gets or sets topic handle
 * 
 */
function PutTopicNameRequest() {
}

/**
 * Defines the metadata of PutTopicNameRequest
 *
 * @returns {object} metadata of PutTopicNameRequest
 *
 */
PutTopicNameRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PutTopicNameRequest',
    type: {
      name: 'Composite',
      className: 'PutTopicNameRequest',
      modelProperties: {
        publisherType: {
          required: true,
          serializedName: 'publisherType',
          type: {
            name: 'Enum',
            allowedValues: [ 'User', 'App' ]
          }
        },
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

module.exports = PutTopicNameRequest;
