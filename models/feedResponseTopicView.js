/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the FeedResponseTopicView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
function FeedResponseTopicView() {
}

/**
 * Defines the metadata of FeedResponseTopicView
 *
 * @returns {object} metadata of FeedResponseTopicView
 *
 */
FeedResponseTopicView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FeedResponse[TopicView]',
    type: {
      name: 'Composite',
      className: 'FeedResponseTopicView',
      modelProperties: {
        data: {
          required: true,
          serializedName: 'data',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'TopicViewElementType',
                type: {
                  name: 'Composite',
                  className: 'TopicView'
                }
            }
          }
        },
        cursor: {
          required: true,
          serializedName: 'cursor',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = FeedResponseTopicView;
