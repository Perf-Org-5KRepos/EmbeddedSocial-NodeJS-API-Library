/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the FeedResponseUserProfileView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
function FeedResponseUserProfileView() {
}

/**
 * Defines the metadata of FeedResponseUserProfileView
 *
 * @returns {object} metadata of FeedResponseUserProfileView
 *
 */
FeedResponseUserProfileView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FeedResponse[UserProfileView]',
    type: {
      name: 'Composite',
      className: 'FeedResponseUserProfileView',
      modelProperties: {
        data: {
          required: true,
          serializedName: 'data',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'UserProfileViewElementType',
                type: {
                  name: 'Composite',
                  className: 'UserProfileView'
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

module.exports = FeedResponseUserProfileView;