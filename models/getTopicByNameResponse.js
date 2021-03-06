/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * <autogenerated> This file was generated using AutoRest. </autogenerated>
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GetTopicByNameResponse class.
 * @constructor
 * Response from get topic by name
 * @member {string} topicHandle Gets or sets topic handle of the response
 * 
 */
function GetTopicByNameResponse() {
}

/**
 * Defines the metadata of GetTopicByNameResponse
 *
 * @returns {object} metadata of GetTopicByNameResponse
 *
 */
GetTopicByNameResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GetTopicByNameResponse',
    type: {
      name: 'Composite',
      className: 'GetTopicByNameResponse',
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

module.exports = GetTopicByNameResponse;
